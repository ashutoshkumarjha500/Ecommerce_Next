// import { CREATE_SEO_DATA_RED, DELETE_SEO_DATA_RED, GET_SEO_DATA_RED, UPDATE_SEO_DATA_RED } from "../Constant"

// export default function SeoDataReducer(state = [], action) {
//     switch (action.type) {
//         case CREATE_SEO_DATA_RED:
//             return [...state, action.payload]

//         case GET_SEO_DATA_RED:
//             return action.payload || []

//         case UPDATE_SEO_DATA_RED:
//             let index = state.findIndex(x => x.id === action.payload.id)
//             state[index].url = action.payload.url
//             state[index].title = action.payload.title
//             state[index].description = action.payload.description
//             state[index].keywords = action.payload.keywords
//             state[index].status = action.payload.status
//             return state

//         case DELETE_SEO_DATA_RED:
//             return state.filter(x => x.id !== action.payload.id)

//         default:
//             return state
//     }
// }

import {
  CREATE_SEO_DATA_RED,
  DELETE_SEO_DATA_RED,
  GET_SEO_DATA_RED,
  UPDATE_SEO_DATA_RED
} from "../Constant"

export default function SeoDataReducer(state = [], action) {

  switch (action.type) {

    case CREATE_SEO_DATA_RED:
      return [...state, action.payload]

    case GET_SEO_DATA_RED:
      return action.payload || []

    case UPDATE_SEO_DATA_RED:
      return state.map(item =>
        item.id === action.payload.id ? { ...action.payload } : item
      )

    case DELETE_SEO_DATA_RED:
      return state.filter(x => x.id !== action.payload.id)

    default:
      return state
  }
}