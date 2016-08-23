/**
 * Created by pomy on 8/23/16.
 */

'use strict';

import { handleActions } from 'redux-actions';

import * as CONSTANT from '../constant/index';

export default handleActions({
    [CONSTANT.ADD_TO_DO]:(state,action) => {
        return Object.assign({},state,{
            list:state.list.concat(action.payload)
        });
    }
},{
    list:[]
})