import { FilterField } from "../enum/filter-field-enum"
import { FilterOperator } from "../enum/filter-operator-enum"

export type SearchFilter = {
    id: string
    field: FilterField,
    operator: FilterOperator
    value: number
}
