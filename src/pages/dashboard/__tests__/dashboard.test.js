import React from "react";
import { shallow } from "enzyme";

import Dashboard from "../dashboard";

describe("Dashboard", () => {
  const categories = ["movie", "science"];
  const wrapper = shallow(<Dashboard categories={categories} />);

  test("renders Dashboard component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
