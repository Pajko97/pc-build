/* 
    1. Run Apify actor
    2. Get data from Apify
    3. Update database

*/

const getCPUList = async () => {

    const cpu_list = fetch('https://api.apify.com/v2/acts/janedoe~WP-GET-CPU/runs?maxItems=10000')
    .then(response => response.json())
    .then(data => {
        return data.items
    })
    .catch(err => console.error(err));

    try {
        db.collection('cpu').insertMany(cpu_list);
    } catch (error) {
        console.error(error);
    }

}

const getGPUList = async () => {
    
        const gpu_list = fetch('https://api.apify.com/v2/acts/janedoe~WP-GET-GPU/runs?maxItems=10000')
        .then(response => response.json())
        .then(data => {
            return data.items
        })
        .catch(err => console.error(err));
    
        try {
            db.collection('gpu').insertMany(gpu_list);
        } catch (error) {
            console.error(error);
        }
    
}

const getMotherboardList = async () => {
        
            const motherboard_list = fetch('https://api.apify.com/v2/acts/janedoe~WP-GET-MOTHERBOARD/runs?maxItems=10000')
            .then(response => response.json())
            .then(data => {
                return data.items
            })
            .catch(err => console.error(err));
        
            try {
                db.collection('motherboard').insertMany(motherboard_list);
            } catch (error) {
                console.error(error);
            }
        
}

const getRAMList = async () => {
                
            const ram_list = fetch('https://api.apify.com/v2/acts/janedoe~WP-GET-RAM/runs?maxItems=10000')
            .then(response => response.json())
            .then(data => {
                return data.items
            })
            .catch(err => console.error(err));
        
            try {
                db.collection('ram').insertMany(ram_list);
            } catch (error) {
                console.error(error);
            }
            
}