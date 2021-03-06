import { ShallowWrapper } from "enzyme";

/**
 * Returns node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search. 
 */
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);
