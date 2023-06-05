const indexes = require('./indexes')

const getBuildPrices = (budget: number, purpose: string) => {

    const TOTAL= budget;

    const gpu_price = (TOTAL * indexes.gamer.gpu)
    const cpu_price = (TOTAL * indexes.gamer.cpu)
    const mobo_price = (TOTAL * indexes.gamer.mobo)
    const ram_price = (TOTAL * indexes.gamer.ram)
    const case_price = (TOTAL * indexes.gamer.ram)
    const storage_price = (TOTAL * indexes.gamer.ram)


    return {
        gpu_cost : gpu_price,
        cpu_cost: cpu_price,
        mobo_cost : mobo_price,
        ram_cost: ram_price,
        case_cost : case_price,
        storage_cost : storage_price
    }


}




module.exports = {
    getBuildPrices
}