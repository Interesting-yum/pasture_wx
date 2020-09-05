/**
 * 牧场相关资料的API
 */
const pasturePort = ":8762"
/*添加牧场*/
const addPasture = pasturePort+'/pasture/addPasture';
/*添加牧场*/
const updatePasture =  pasturePort+'/pasture/updatePasture';
/*通过ID获取牧场*/
const getPastureListByUserId =  pasturePort+'/pasture/getPastureListByUserId';


export{
	addPasture,
	updatePasture,
	getPastureListByUserId,
}