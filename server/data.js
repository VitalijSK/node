module.exports.parsetime = function (date){
    return {
        'hour' : date.getHours(),
        'minute' : date.getMinutes(),
        'second' : date.getSeconds()
    }
}
module.exports.unix = function(data)
{
    return {
        'unixtime' : data.getTime()
    }
}