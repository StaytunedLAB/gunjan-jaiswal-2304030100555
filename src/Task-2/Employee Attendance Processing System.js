function toMinutes(timeStr) {
    if (!timeStr) return null;
    const parts = timeStr.split(":");
    if (parts.length !== 2) return null;

    const hours = Number(parts[0]);
    const minutes = Number(parts[1]);

    if (isNaN(hours) || isNaN(minutes)) return null;

    return hours * 60 + minutes;
}

function processAttendance(input) {
    const data = JSON.parse(JSON.stringify(input)); 
    let result = {
        employeeId: data.employeeId,
        date: data.date,
        status: "",
        totalWorkingMinutes: 0,
        overtimeMinutes: 0,
        note: "",
        error: null
    };

    try {
        const checkIn = toMinutes(data.checkIn);
        const checkOut = toMinutes(data.checkOut);

        if (checkIn === null || checkOut === null) {
            result.status = "incomplete";
            result.note = "Missing check-in or check-out";
            return result; // exit early
        }

        let duration = checkOut - checkIn;

        let breakMinutes = 0;

        if (data.break) {
            const breakStart = toMinutes(data.break.start);
            const breakEnd = toMinutes(data.break.end);

            if (breakStart !== null && breakEnd !== null) {
                breakMinutes = breakEnd - breakStart;
            } else {
                // default 30-minute break
                breakMinutes = 30;
            }
        }

        const workingMinutes = duration - breakMinutes;

        if (workingMinutes < 0) {
            result.status = "invalid";
            result.note = "Negative time calculation";
            result.totalWorkingMinutes = 0;
            return result;
        }

        result.totalWorkingMinutes = workingMinutes;
        result.status = "complete";

        if (data.overtimeApproved === true) {
            const eightHours = 8 * 60;
            if (workingMinutes > eightHours) {
                result.overtimeMinutes = workingMinutes - eightHours;
            }
        }

        result.note = "Attendance processed successfully";

    } catch (err) {
        // SYSTEM ERROR
        result.status = "error";
        result.error = err.message;
        result.note = "System error occurred";
    }

    finally {
        console.log("✔ Attendance processed (finally block executed)");
        console.log(result);
    }

    return result;
}

const inputData = {
    employeeId: "EMP102",
    date: "2025-12-09",
    checkIn: "09:00",
    checkOut: "18:30",
    break: {
        start: "13:00",
        end: "13:45"
    },
    overtimeApproved: true
};

processAttendance(inputData);