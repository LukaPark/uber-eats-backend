import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver {
    //@Query 는 GraphQL Query를 정의하는 데 사용됩니다.
    // 첫번째 Argument로 Function을 받음.
    // ! @Query(() => Boolean) 는 GraphQL Query의 Return Type을 정의하는 데 사용.
    @Query(() => Boolean)
    isPizzaGood(): Boolean {
        return true;
    }
}
