import {dataItem} from "../Data/data";
import {filterType} from "../Features/Filters/filter-reducer";

const filterUtil = (arr: Array<dataItem>, filters: Array<filterType>) => {
    const newData = []
    for (let service of arr) {
        let isReturn = []
        for (let filter of filters) {
            let resultOfProperties = false
            for (let property of service.properties) {
                if (filter.title === property.title && filter.value === property.value) {
                    resultOfProperties = true
                    break
                } else {
                    resultOfProperties = false
                }
            }
            if (resultOfProperties) {
                isReturn.push(true)
            } else {
                isReturn.push(false)
            }
        }
        if (!isReturn.includes(false)) {
            newData.push(service)
        }
    }
    return newData
}

export default filterUtil