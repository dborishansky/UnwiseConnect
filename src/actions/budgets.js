import { ActionTypes } from '../config/constants';
import { ref } from '../config/constants';

export const addItem = payload => {
	return {
		type: ActionTypes.BUDGETS_ADD_ITEM,
		payload,
	}
}

export const removeItem = payload => {
	return {
		type: ActionTypes.BUDGETS_REMOVE_ITEM,
		payload,
	}
}

export const subscribe = payload => {
	return dispatch => {

		dispatch({
			type: ActionTypes.BUDGETS_SUBSCRIBE,	
		})
		
    const itemsRef = ref.child(`items`);
    itemsRef.on('value', snapshot => {
      const itemList = snapshot.val();

      dispatch({
        type: ActionTypes.BUDGETS_UPDATE,
        payload: { 
          itemList: itemList,
        }
      });
    });   
	}
}

export const search = payload => {
	return {
		type: ActionTypes.BUDGETS_SEARCH,
		payload,
	}
}

export const toggleColumn = payload => {
	return {
		type: ActionTypes.BUDGETS_TOGGLE_COL,
		payload,
	}
}

export const updateItem = payload => {
	return {
		type: ActionTypes.BUDGETS_UPDATE_ITEM,
		payload,
	}
}