<<<<<<< HEAD:src/components/__tests__/subtitle.test.js
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Subtitle from '../subtitle';
=======
import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import type { ProfileInfo } from "../../@types"
import Subtitle from "../subtitle"
>>>>>>> typescript:src/components/__tests__/subtitle.test.tsx

describe('Subtitle', () => {
  const mockEvent = { target: { value: 'This is a mock event' } };
  const props = {
    data: {
<<<<<<< HEAD:src/components/__tests__/subtitle.test.js
      subtitle: 'A frontend developer',
    },
=======
      subtitle: "A frontend developer",
    } as ProfileInfo["data"],
>>>>>>> typescript:src/components/__tests__/subtitle.test.tsx
    handleDataChange: jest.fn().mockReturnValue({}),
  };

  const component = shallow(<Subtitle {...props} />);

  it('renders correctly', () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it('calls onChange', () => {
    component.find('input').at(0).simulate('change', mockEvent);
    expect(props.handleDataChange).toBeCalledWith('subtitle', mockEvent);
  });
});
