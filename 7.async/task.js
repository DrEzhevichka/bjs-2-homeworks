class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        let AlarmTime = this.alarmCollection.find(alarm => alarm.time === time);
        if (AlarmTime) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({callback: callback, time: time, canCall: true});
    }
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        let now = new Date;
        let nowHours = String(now.getHours());
        let nowMinutes = String(now.getMinutes());
        let formattedTime = `${nowHours.padStart(2, '0')}:${nowMinutes.padStart(2, '0')}`;
        return formattedTime;
    }
    start() {
        if (this.intervalId !== null) {
            return;
        }
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            })
        });
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {alarm.canCall = true});
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}