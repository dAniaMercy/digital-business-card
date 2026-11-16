import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ProfileResolver } from './profile.resolver';
import { ProfileService } from './profile.service';
import { ProfileRepository } from './profile.repository';
import { PrismaService } from './prisma.service';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver, autoSchemaFile: true, sortSchema: true,
    playground: false, introspection: true,
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  })],
  providers: [ProfileResolver, ProfileService, ProfileRepository, PrismaService],
})
export class AppModule {}
