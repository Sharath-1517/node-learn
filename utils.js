const os = require('os');

function sayHello(name) {
    console.log(`Hello ${name}`);
}

function printSum(num1, num2) {
    console.log(num1 + num2);
}

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
    sayHello: sayHello,
    printSum: printSum,
    deviceInfo: printSystemDetails
};