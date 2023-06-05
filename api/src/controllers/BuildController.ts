import { getBuildPrices } from '../helpers/generateBuildPrices'
import { generateComponentList } from '../helpers/generateComponentList'


const BuildGenerate = async (req: any, res: any) => {

    const { budget, purpose } = req.body

    try {
    
    /* Calculate basis for components prices*/
    const build_prices = getBuildPrices(budget, purpose)

    /* Get component list that fit the criteria for provided params */
    const component_lists = generateComponentList(build_prices)


        res.status(200).send({
            build_1: {
                cpu: component_lists.cpu[0],
                gpu: component_lists.gpu[0],
                mobo: component_lists.mobo[0],
                ram: component_lists.ram[0],
                psu: component_lists.psu[0],
                ssd: component_lists.ssd[0],
                case: component_lists.case[0]
            },
            
            build_2: {
                cpu: component_lists.cpu[1],
                gpu: component_lists.gpu[1],
                mobo: component_lists.mobo[1],
                ram: component_lists.ram[1],
                psu: component_lists.psu[1],
                ssd: component_lists.ssd[1],
                case: component_lists.case[1]
            },
            
            build_3: {
                cpu: component_lists.cpu[1],
                gpu: component_lists.gpu[1],
                mobo: component_lists.mobo[1],
                ram: component_lists.ram[1],
                psu: component_lists.psu[1],
                ssd: component_lists.ssd[1],
                case: component_lists.case[1]
            },
            
            build_4:  {
                cpu: component_lists.cpu[1],
                gpu: component_lists.gpu[1],
                mobo: component_lists.mobo[1],
                ram: component_lists.ram[1],
                psu: component_lists.psu[1],
                ssd: component_lists.ssd[1],
                case: component_lists.case[1]
            }
        })
    } catch (err) {
        throw new Error(err)
    }
    
    

}

module.exports = {
    BuildGenerate
}
