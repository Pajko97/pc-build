import { getBuildPrices } from '../helpers/generateBuildPrices'
import { generateComponentList } from '../helpers/generateComponentList'


const BuildGenerate = async (req: any, res: any) => {

    const { budget, purpose } = req.body

    /* Calculate basis for components prices*/
    const build_prices = getBuildPrices(budget, purpose)

    /* Get component list that fit the criteria for provided params */
    const component_lists = generateComponentList(build_prices)


    res.status(200).send({
        build_1: {
            cpu: '',
            gpu: '',

        }
    })
    
    

}

module.exports = {
    BuildGenerate
}