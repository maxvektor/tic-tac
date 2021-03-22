import {screen} from "@testing-library/react";

export const getElement = (id) => screen.queryByTestId(id);
export const getAllElements = (id) => screen.findAllByTestId(id);
