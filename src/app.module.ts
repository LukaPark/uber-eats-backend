import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { RestaurantModule } from './restaurant/restaurant.module';
import { ApolloDriver } from '@nestjs/apollo';
@Module({
    imports: [
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            // 해당 경로에 schema.gql 파일을 생성해줌.
            // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            // schema.gql 파일을 생성하지 않고, 메모리에 스키마를 생성해줌.
            autoSchemaFile: true,
        }),
        RestaurantModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
