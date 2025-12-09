// BANK SYSTEM - TRANSACTION ENGINE
function toNumber(value) {
    const num = Number(value);
    return isNaN(num) ? null : num;
}
function processBankAccount(input) {
    const account = JSON.parse(JSON.stringify(input));

    const applied = [];
    const rejected = [];
    let finalBalance = 0;

    let auditLog = "";

    try {
        const openingBalance = toNumber(account.initialBalance);

        if (openingBalance === null || openingBalance < 0) {
            throw new Error("Invalid opening balance");
        }

        finalBalance = openingBalance;
        account.transactions.forEach((tran, index) => {
            try {
                if (!tran.type) {
                    rejected.push({
                        transaction: tran,
                        reason: "Missing transaction type"
                    });
                    return;
                }

                const type = tran.type.toLowerCase();

                if (type !== "deposit" && type !== "withdraw") {
                    rejected.push({
                        transaction: tran,
                        reason: "Unknown transaction type"
                    });
                    return;
                }

                const amount = toNumber(tran.amount);

                if (amount === null || amount <= 0) {
                    rejected.push({
                        transaction: tran,
                        reason: "Invalid transaction amount"
                    });
                    return;
                }

                // APPLY LOGIC
                if (type === "deposit") {
                    finalBalance += amount;
                    applied.push({ ...tran, status: "Applied" });
                }

                else if (type === "withdraw") {
                    if (amount > finalBalance) {
                        rejected.push({
                            transaction: tran,
                            reason: "Insufficient balance"
                        });
                        return;
                    }

                    finalBalance -= amount;
                    applied.push({ ...tran, status: "Applied" });
                }

            } catch (err) {
                // SYSTEM ERROR for a single transaction
                rejected.push({
                    transaction: tran,
                    reason: "System Error: " + err.message
                });
            }
        });

    } catch (error) {
        console.log("❌ Fatal Error:", error.message);
        auditLog = "System encountered a major issue!";
    }

    finally {
        // This block ALWAYS runs
        if (!auditLog) {
            auditLog = "Processing completed at " + new Date().toISOString();
        }

        console.log("\n===== ACCOUNT SUMMARY =====");
        console.log("Account Number:", account.accountNumber);
        console.log("Account Holder:", account.accountHolder);
        console.log("Currency:", account.currency);
        console.log("Opening Balance:", account.initialBalance);
        console.log("Final Balance:", finalBalance);
        console.log("\nApplied Transactions:", applied);
        console.log("\nRejected Transactions:", rejected);
        console.log("\nAudit Log:", auditLog);
    }
}

const inputData = {
    accountNumber: "ACC12345",
    accountHolder: "John Doe",
    initialBalance: "1000",
    currency: "INR",
    transactions: [
        { type: "Deposit", amount: "500" },
        { type: "Withdraw", amount: 200 },
        { type: "Withdraw", amount: 2000 },    
        { type: "deposit", amount: "-50" },    
        { type: "", amount: 100 },             
        { amount: 100 },                      
        { type: "Transfer", amount: 200 },    
        { type: "Withdraw", amount: "abc" }    
    ]
};

processBankAccount(inputData);