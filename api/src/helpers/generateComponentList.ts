import { PrismaClient, Component, CPU, GPU, Mobo, RAM, PSU, Case, SSD } from '@prisma/client';
import { getBuildPrices } from '../helpers/generateBuildPrices'


interface ComponentPrices {
    cpu_cost: number;
    gpu_cost: number;
    mobo_cost: number;
    ram_cost: number;
    psu_cost: number;
    case_cost: number;
    ssd_cost: number;
  }

  
const generateComponentList = (componentPrices: any) => {
   try {
    const componentPrices: ComponentPrices = getBuildPrices(budget, purpose);
    
    const fetch_components: [
      Component[],
      CPU[],
      GPU[],
      Mobo[],
      RAM[],
      PSU[],
      Case[],
      SSD[]
    ] = await prisma.$transaction([
      prisma.component.findMany({
        where: { category: 'electronics' },
      }),
      prisma.cpu.findMany({
        where: {
          price: {
            gte: componentPrices.cpu_cost - 50,
            lte: componentPrices.cpu_cost + 50,
          },
        },
      }),
      prisma.gpu.findMany({
        where: {
          price: {
            gte: componentPrices.gpu_cost - 50,
            lte: componentPrices.gpu_cost + 50,
          },
        },
      }),
      prisma.mobo.findMany({
        where: {
          price: {
            gte: componentPrices.mobo_cost - 50,
            lte: componentPrices.mobo_cost + 50,
          },
        },
      }),
      prisma.ram.findMany({
        where: {
          price: {
            gte: componentPrices.ram_cost - 50,
            lte: componentPrices.ram_cost + 50,
          },
        },
      }),
      prisma.psu.findMany({
        where: {
          price: {
            gte: componentPrices.psu_cost - 50,
            lte: componentPrices.psu_cost + 50,
          },
        },
      }),
      prisma.case.findMany({
        where: {
          price: {
            gte: componentPrices.case_cost - 50,
            lte: componentPrices.case_cost + 50,
          },
        },
      }),
      prisma.ssd.findMany({
        where: {
          price: {
            gte: componentPrices.ssd_cost - 50,
            lte: componentPrices.ssd_cost + 50,
          },
        },
      }),
    ]);
     
    return fetch_components
   } catch(err: any) {
     throw new Error(err)
   }
}

module.exports = {
    generateComponentList
}
