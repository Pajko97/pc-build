import { PrismaClient, Component, CPU, GPU, Mobo, RAM, PSU, Case, SSD } from '@prisma/client';
import { getBuildPrices } from '../helpers/generateBuildPrices'
import { generateComponentList } from '../helpers/generateComponentList'


interface ComponentPrices {
  cpu_cost: number;
  gpu_cost: number;
  mobo_cost: number;
  ram_cost: number;
  psu_cost: number;
  case_cost: number;
  ssd_cost: number;
}

const BuildGenerate = async (req: any, res: any) => {
    
    const { budget, purpose } = req.body;

    try {
        const component_prices_base = getBuildPrices(budget,purpose)
        const component_list = generateComponentList(component_prices_base)
        res.status(200).send(component_list)
    } catch(err) {
        res.status(500).send({"error" : "Failed to generate build"})
      throw new Error(err)
    }
    
}

module.exports = {
    BuildGenerate
}
