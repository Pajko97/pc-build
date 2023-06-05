import { getBuildPrices } from '../helpers/generateBuildPrices'
import { generateComponentList } from '../helpers/generateComponentList'


const buildGenerate = async (req: any, res: any) => {

    const { budget, purpose } = req.body
    /* Generate individual component prices based on budget and purpose */
    const build_prices = getBuildPrices(budget, purpose)
    const component_lists = generateComponentList(build_prices)

    res.status(200).send({
        build_1: {
            cpu: '',
            gpu: '',
            
        }
    })
    
    

}

module.exports = {
    buildGenerate
}