class Common{

    timesStamp(){
        var ahora = new Date(Date.now());
        var entitydate = ahora.getMonth() + ahora.getDate() + ahora.getFullYear() + ahora.getHours() + ahora.getMinutes() + ahora.getSeconds()
        return entitydate
    }
}

export default Common;