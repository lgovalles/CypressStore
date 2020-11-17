class Common{

    timesStamp(){
        var ahora = new Date(Date.now());
        var entitydate = ahora.getMonth() + ahora.getDate() + ahora.getFullYear() + ahora.getHours() + ahora.getMinutes() + ahora.getSeconds()
        return entitydate
    }
    
    makeid() {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        return result;
     }
}

export default Common;