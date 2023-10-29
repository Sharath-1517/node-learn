const os = require('os');

function printSystemDetails() {

    const setUptime = os.uptime();
    const userInfo = os.userInfo();

    const otherInformation = {
        name: os.type(),
        release: os.release(),
        totalMemory: os.totalmem(),
        freeSpace: os.freemem()
    }

    return {
        uptime: setUptime,
        userInfo: userInfo,
        otherInformation
    }

}

module.exports = {
    deviceInfo: printSystemDetails
};