const generateComponentList = (componentPrices: any) => {

    const cpu_list = await prisma.cpu.findMany({
        where: {
          price: {
            gte: componentPrices.cpu_cost - 50,
            lte: componentPrices.cpu_cost + 50
          }
        }
    });

    /* Choose GPU */

    const gpu_list = await prisma.cpu.findMany({
        where: {
          price: {
            gte: componentPrices.gpu_cost - 50,
            lte: componentPrices.gpu_cost + 50
          }
        }
    });

    /* Choose MOBO */

    const mobo_list = await prisma.cpu.findMany({
        where: {
          price: {
            gte: componentPrices.mobo_cost - 50,
            lte: componentPrices.mobo_cost + 50
          }
        }
    });
    
    /* Choose RAM */

    const ram_list = await prisma.ram.findMany({
        where: {
            price: {
              gte: componentPrices.ram_cost - 50,
              lte: componentPrices.ram_cost + 50
            }
          }
    })

     /* Choose PSU */

     const psu_list = await prisma.ram.findMany({
        where: {
            price: {
              gte: componentPrices.psu_cost - 50,
              lte: componentPrices.psu_cost + 50
            }
          }
    })

    /* Choose Case */

    const case_list = await prisma.ram.findMany({
        where: {
            price: {
              gte: componentPrices.mobo_cost - 50,
              lte: componentPrices.mobo_cost + 50
            }
          }
    })

    /* Choose SSD */

    const ssd_list = await prisma.ram.findMany({
        where: {
            price: {
              gte: componentPrices.mobo_cost - 50,
              lte: componentPrices.mobo_cost + 50
            }
          }
    })

    return {
        cpu: cpu_list,
        gpu: gpu_list,
        mobo: mobo_list,
        ram: ram_list,
        psu: psu_list,
        case: case_list,
        ssd: ssd_list,
    }
}

module.exports = {
    generateComponentList
}