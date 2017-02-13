/**
 * Created by tan on 2017/2/11.
 */

export const Change_Loc='Change_Loc';
//action创建函数

/*页面跳转时的action
loc {string} 表示当前所在的分类页面*/
export function changeLoc(loc) {
  return {
    type: Change_Loc,
    loc
  }
}
