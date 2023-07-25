const CONST = {
  DELETED_REQUEST: {
    status: 204,
    response: {
      message: "Entity successfully deleted.",
    },
  },
  CREATE_REQUEST: {
    status: 201,
    response: {
      message: 'Entity successfully created.'
    }
  },
  UPDATE_REQUEST: {
    status: 200,
    response: {
      message: 'Entity successfully updated.'
    }
  },
  GET_ALL_REQUEST: {
    status: 200,
    response: {
      message: 'Entities retrieved successfully.'
    }
  },
  GET_BY_ID: {
    status: 200,
    response: {
      message: 'Entity retrieved successfully.'
    }
  }
};

module.exports = CONST;
