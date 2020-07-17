import RestfulEndpoint from "reactor/restful-endpoint";

class UsersGroupsService extends RestfulEndpoint {
    route = '/users/groups';
}

export default new UsersGroupsService();