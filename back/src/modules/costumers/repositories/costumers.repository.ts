import { CreateCostumerDto } from "../dto/create-costumer.dto";
import { UpdateCostumerDto } from "../dto/update-costumer.dto";
import { Costumer } from "../entities/costumer.entity";



export abstract class CostumersRepository {
    abstract create(data: CreateCostumerDto): Promise<Costumer>
    abstract findAll(): Promise<Costumer[]>
    abstract findOne(id: number): Promise<Costumer | undefined>
    abstract update(id: number, data: UpdateCostumerDto): Promise<Costumer | undefined>
    abstract remove(id: number): Promise<void>
}