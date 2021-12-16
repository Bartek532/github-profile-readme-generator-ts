<<<<<<< HEAD:src/components/__tests__/addons.test.js
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

import Addons from '../addons';
=======
import React from "react"
import toJson from "enzyme-to-json"
import { shallow, mount } from "enzyme"
import type { ProfileInfo } from "../../@types"
import Addons from "../addons"
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

jest.useFakeTimers()

describe('Addons', () => {
  const dataInput = {
    title: '',
    subtitle: 'A passionate frontend developer from India',
    currentWork: '',
    currentLearn: '',
    collaborateOn: '',
    helpWith: '',
    ama: '',
    contact: '',
    funFact: '',
    twitterBadge: false,
    visitorsBadge: false,
    badgeStyle: 'flat',
    badgeColor: '0e75b6',
    badgeLabel: 'Profile views',
    githubProfileTrophy: false,
    githubStats: false,
    githubStatsOptions: {
      theme: '',
      titleColor: '',
      textColor: '',
      bgColor: '',
      hideBorder: false,
      cacheSeconds: null,
      locale: 'en',
    },
    topLanguages: false,
    topLanguagesOptions: {
      theme: '',
      titleColor: '',
      textColor: '',
      bgColor: '',
      hideBorder: false,
      cacheSeconds: null,
      locale: 'en',
    },
    devDynamicBlogs: false,
    mediumDynamicBlogs: false,
    rssDynamicBlogs: false,
  } as ProfileInfo["data"]
  const socialInput = {
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    github: '',
    dev: '',
    linkedin: '',
    codepen: '',
    stackoverflow: '',
    kaggle: '',
    codesandbox: '',
    fb: '',
    instagram: '',
    twitter: '',
    dribbble: '',
    behance: '',
    medium: '',
    youtube: '',
    codechef: '',
    hackerrank: '',
    codeforces: '',
    leetcode: '',
    topcoder: '',
    hackerearth: '',
    geeks_for_geeks: '',
    discord: '',
    rssurl: '',
  };
=======
    github: "",
    dev: "",
    linkedin: "",
    codepen: "",
    stackoverflow: "",
    kaggle: "",
    codesandbox: "",
    fb: "",
    instagram: "",
    twitter: "",
    dribbble: "",
    behance: "",
    medium: "",
    youtube: "",
    codechef: "",
    hackerrank: "",
    codeforces: "",
    leetcode: "",
    topcoder: "",
    hackerearth: "",
    geeks_for_geeks: "",
    discord: "",
    rssurl: "",
  } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

  let mockHandleCheckChange
  let mockHandleDataChange
  beforeEach(() => {
    mockHandleCheckChange = jest.fn()
    mockHandleDataChange = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

<<<<<<< HEAD:src/components/__tests__/addons.test.js
  it('renders correctly', () => {
=======
  it("renders correctly", () => {
>>>>>>> typescript:src/components/__tests__/addons.test.tsx
    const addOnComponent = shallow(
      <Addons
        data={dataInput}
        social={socialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    expect(toJson(addOnComponent)).toMatchSnapshot();
  });
=======
    )

    expect(toJson(addOnComponent)).toMatchSnapshot()
  })
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

  it('should render Customize Badges', () => {
    const newDataInput = {
      ...dataInput,
<<<<<<< HEAD:src/components/__tests__/addons.test.js
      mediumDynamicBlogs: 'some-medium-blogs-value',
    };

    const newSocialInput = {
      medium: '@abcd',
    };

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
    );

    addOnComponent.find('#visitors-count-open-btn').simulate('click', {});

    expect(addOnComponent).toMatchSnapshot();
  });
=======
      mediumDynamicBlogs: true,
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
    )

    addOnComponent.find("#visitors-count-open-btn").simulate("click", {})

    expect(addOnComponent).toMatchSnapshot()
  })
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

  it('should handle data change when badge style is changed', () => {
    const mockEvent = { target: { value: 'style-new' } };
    const newDataInput = {
      ...dataInput,
<<<<<<< HEAD:src/components/__tests__/addons.test.js
      mediumDynamicBlogs: 'some-medium-blogs-value',
      githubStatsOptions: {
        theme: 'theme-1',
        titleColor: 'title-abcd',
        textColor: 'some-color',
        bgColor: 'abcd',
=======
      mediumDynamicBlogs: true,
      githubStatsOptions: {
        theme: "new-theme-for-stats",
        titleColor: "title-abcd",
        textColor: "some-color",
        bgColor: "abcd",
>>>>>>> typescript:src/components/__tests__/addons.test.tsx
        hideBorder: false,
        cacheSeconds: null,
        locale: 'en',
      },
    }

    const newSocialInput = {
<<<<<<< HEAD:src/components/__tests__/addons.test.js
      medium: '@abcd',
    };
=======
      medium: "@abcd",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    addOnComponent.find('#visitors-count-open-btn').simulate('click', {});
    addOnComponent.find('#badge-style').simulate('change', mockEvent);

    jest.runAllTimers();

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1);
    expect(mockHandleDataChange).toHaveBeenCalledWith('badgeStyle', { target: { value: 'style-new' } });
  });

  it('should handle data change when badge color is changed', () => {
    const mockEvent = { target: { value: 'new-color-abcd' } };
    const newDataInput = {
      ...dataInput,
      mediumDynamicBlogs: 'some-medium-blogs-value',
    };

    const newSocialInput = {
      medium: '@abcd',
    };
=======
    )

    addOnComponent.find("#visitors-count-open-btn").simulate("click", {})
    addOnComponent.find("#badge-style").simulate("change", mockEvent)

    jest.runAllTimers()

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1)
    expect(mockHandleDataChange).toHaveBeenCalledWith("badgeStyle", {
      target: { value: "style-new" },
    })
  })

  it("should handle data change when badge color is changed", () => {
    const mockEvent = { target: { value: "new-color-abcd" } }
    const newDataInput = {
      ...dataInput,
      mediumDynamicBlogs: true,
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    addOnComponent.find('#visitors-count-open-btn').simulate('click', {});
    addOnComponent.find('#badge-color').simulate('change', mockEvent);

    jest.runAllTimers();

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1);
    expect(mockHandleDataChange).toHaveBeenCalledWith('badgeColor', { target: { value: 'new-color-abcd' } });
  });

  it('should handle data change when badge-label-text is changed', () => {
    const mockEvent = { target: { value: 'label-abcd-random' } };
    const newDataInput = {
      ...dataInput,
      mediumDynamicBlogs: 'some-medium-blogs-value',
    };

    const newSocialInput = {
      medium: '@abcd',
    };
=======
    )

    addOnComponent.find("#visitors-count-open-btn").simulate("click", {})
    addOnComponent.find("#badge-color").simulate("change", mockEvent)

    jest.runAllTimers()

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1)
    expect(mockHandleDataChange).toHaveBeenCalledWith("badgeColor", {
      target: { value: "new-color-abcd" },
    })
  })

  it("should handle data change when badge-label-text is changed", () => {
    const mockEvent = { target: { value: "label-abcd-random" } }
    const newDataInput = {
      ...dataInput,
      mediumDynamicBlogs: true,
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    addOnComponent.find('#visitors-count-open-btn').simulate('click', {});
    addOnComponent.find('#badge-label-text').simulate('change', mockEvent);

    jest.runAllTimers();

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1);
    expect(mockHandleDataChange).toHaveBeenCalledWith('badgeLabel', { target: { value: 'label-abcd-random' } });
  });
=======
    )

    addOnComponent.find("#visitors-count-open-btn").simulate("click", {})
    addOnComponent.find("#badge-label-text").simulate("change", mockEvent)

    jest.runAllTimers()

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1)
    expect(mockHandleDataChange).toHaveBeenCalledWith("badgeLabel", {
      target: { value: "label-abcd-random" },
    })
  })
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

  it('should render Customize Github stats card', () => {
    const newDataInput = {
      ...dataInput,
<<<<<<< HEAD:src/components/__tests__/addons.test.js
      mediumDynamicBlogs: 'some-medium-blogs-value',
    };

    const newSocialInput = {
      medium: '@abcd',
    };

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
    );

    addOnComponent.find('#github-stats-open-btn').simulate('click', {});

    expect(addOnComponent).toMatchSnapshot();
  });
=======
      mediumDynamicBlogs: true,
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
    )

    addOnComponent.find("#github-stats-open-btn").simulate("click", {})

    expect(addOnComponent).toMatchSnapshot()
  })
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

  it('should handle data change when stats theme is changed', () => {
    const mockEvent = { target: { value: 'new-theme-for-stats' } };
    const newDataInput = {
      ...dataInput,
<<<<<<< HEAD:src/components/__tests__/addons.test.js
      mediumDynamicBlogs: 'some-medium-blogs-value',
=======
      mediumDynamicBlogs: true,
>>>>>>> typescript:src/components/__tests__/addons.test.tsx
      githubStatsOptions: {
        titleColor: 'title-abcd',
        textColor: 'some-color',
        bgColor: 'abcd',
        hideBorder: false,
        cacheSeconds: null,
<<<<<<< HEAD:src/components/__tests__/addons.test.js
        theme: 'new-theme-for-stats',
        locale: 'en',
      },
    };

    const newSocialInput = {
      medium: '@abcd',
    };
=======
        theme: "new-theme-for-stats",
        locale: "en",
      },
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    addOnComponent.find('#github-stats-open-btn').simulate('click', {});
    addOnComponent.find('#stats-theme').simulate('change', mockEvent);

    jest.runAllTimers();

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1);
    expect(mockHandleDataChange).toHaveBeenCalledWith('githubStatsOptions', {
      target: {
        value: {
          theme: 'theme-1',
          titleColor: 'title-abcd',
          textColor: 'some-color',
          bgColor: 'abcd',
          hideBorder: false,
          cacheSeconds: null,
          theme: 'new-theme-for-stats',
          locale: 'en',
        },
      },
    });
  });
=======
    )

    addOnComponent.find("#github-stats-open-btn").simulate("click", {})
    addOnComponent.find("#stats-theme").simulate("change", mockEvent)

    jest.runAllTimers()

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1)
    expect(mockHandleDataChange).toHaveBeenCalledWith("githubStatsOptions", {
      target: {
        value: {
          titleColor: "title-abcd",
          textColor: "some-color",
          bgColor: "abcd",
          hideBorder: false,
          cacheSeconds: null,
          theme: "new-theme-for-stats",
          locale: "en",
        },
      },
    })
  })
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

  it('should handle data change when stats title color is changed', () => {
    const mockEvent = { target: { value: 'red-color' } };
    const newDataInput = {
      ...dataInput,
<<<<<<< HEAD:src/components/__tests__/addons.test.js
      mediumDynamicBlogs: 'some-medium-blogs-value',
      githubStatsOptions: {
        theme: 'theme-1',
        textColor: 'some-color',
        bgColor: 'abcd',
        hideBorder: false,
        cacheSeconds: null,
        theme: 'new-theme-for-stats',
        locale: 'en',
      },
    };

    const newSocialInput = {
      medium: '@abcd',
    };
=======
      mediumDynamicBlogs: true,
      githubStatsOptions: {
        titleColor: "some-color",
        textColor: "some-color",
        bgColor: "abcd",
        hideBorder: false,
        cacheSeconds: null,
        theme: "new-theme-for-stats",
        locale: "en",
      },
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    addOnComponent.find('#github-stats-open-btn').simulate('click', {});
    addOnComponent.find('#stats-title-color').simulate('change', mockEvent);

    jest.runAllTimers();

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1);
    expect(mockHandleDataChange).toHaveBeenCalledWith('githubStatsOptions', {
      target: {
        value: {
          theme: 'theme-1',
          titleColor: 'red-color',
          textColor: 'some-color',
          bgColor: 'abcd',
          hideBorder: false,
          cacheSeconds: null,
          theme: 'new-theme-for-stats',
          locale: 'en',
        },
      },
    });
  });

  it('should handle data change when stats bg color is changed', () => {
    const mockEvent = { target: { value: 'random-color' } };
    const newDataInput = {
      ...dataInput,
      mediumDynamicBlogs: 'some-medium-blogs-value',
      githubStatsOptions: {
        theme: 'theme-1',
        titleColor: 'some-color',
        textColor: 'abcd',
        hideBorder: false,
        cacheSeconds: null,
        theme: 'new-theme-for-stats',
        locale: 'en',
      },
    };

    const newSocialInput = {
      medium: '@abcd',
    };
=======
    )

    addOnComponent.find("#github-stats-open-btn").simulate("click", {})
    addOnComponent.find("#stats-title-color").simulate("change", mockEvent)

    jest.runAllTimers()

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1)
    expect(mockHandleDataChange).toHaveBeenCalledWith("githubStatsOptions", {
      target: {
        value: {
          titleColor: "red-color",
          textColor: "some-color",
          bgColor: "abcd",
          hideBorder: false,
          cacheSeconds: null,
          theme: "new-theme-for-stats",
          locale: "en",
        },
      },
    })
  })

  it("should handle data change when stats bg color is changed", () => {
    const mockEvent = { target: { value: "random-color" } }
    const newDataInput = {
      ...dataInput,
      mediumDynamicBlogs: true,
      githubStatsOptions: {
        titleColor: "some-color",
        textColor: "abcd",
        hideBorder: false,
        cacheSeconds: null,
        theme: "new-theme-for-stats",
        locale: "en",
        bgColor: "some-color",
      },
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    addOnComponent.find('#github-stats-open-btn').simulate('click', {});
    addOnComponent.find('#stats-bg-color').simulate('change', mockEvent);

    jest.runAllTimers();

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1);
    expect(mockHandleDataChange).toHaveBeenCalledWith('githubStatsOptions', {
      target: {
        value: {
          theme: 'theme-1',
          titleColor: 'some-color',
          textColor: 'abcd',
          bgColor: 'random-color',
          hideBorder: false,
          cacheSeconds: null,
          theme: 'new-theme-for-stats',
          locale: 'en',
        },
      },
    });
  });
=======
    )

    addOnComponent.find("#github-stats-open-btn").simulate("click", {})
    addOnComponent.find("#stats-bg-color").simulate("change", mockEvent)

    jest.runAllTimers()

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1)
    expect(mockHandleDataChange).toHaveBeenCalledWith("githubStatsOptions", {
      target: {
        value: {
          titleColor: "some-color",
          textColor: "abcd",
          bgColor: "random-color",
          hideBorder: false,
          cacheSeconds: null,
          theme: "new-theme-for-stats",
          locale: "en",
        },
      },
    })
  })
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

  it('should handle data change when stats cache seconds is changed', () => {
    const mockEvent = { target: { value: 1900 } };
    const newDataInput = {
      ...dataInput,
<<<<<<< HEAD:src/components/__tests__/addons.test.js
      mediumDynamicBlogs: 'some-medium-blogs-value',
      githubStatsOptions: {
        theme: 'theme-1',
        titleColor: 'some-color',
        textColor: 'abcd',
        bgColor: 'random-color',
        hideBorder: false,
        cacheSeconds: null,
        theme: 'new-theme-for-stats',
        locale: 'en',
      },
    };

    const newSocialInput = {
      medium: '@abcd',
    };
=======
      mediumDynamicBlogs: true,
      githubStatsOptions: {
        titleColor: "some-color",
        textColor: "abcd",
        bgColor: "random-color",
        hideBorder: false,
        cacheSeconds: null,
        theme: "new-theme-for-stats",
        locale: "en",
      },
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    addOnComponent.find('#github-stats-open-btn').simulate('click', {});
    addOnComponent.find('#stats-cache-seconds').simulate('change', mockEvent);

    jest.runAllTimers();

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1);
    expect(mockHandleDataChange).toHaveBeenCalledWith('githubStatsOptions', {
      target: {
        value: {
          theme: 'theme-1',
          titleColor: 'some-color',
          textColor: 'abcd',
          bgColor: 'random-color',
          hideBorder: false,
          cacheSeconds: 1900,
          theme: 'new-theme-for-stats',
          locale: 'en',
        },
      },
    });
  });
=======
    )

    addOnComponent.find("#github-stats-open-btn").simulate("click", {})
    addOnComponent.find("#stats-cache-seconds").simulate("change", mockEvent)

    jest.runAllTimers()

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1)
    expect(mockHandleDataChange).toHaveBeenCalledWith("githubStatsOptions", {
      target: {
        value: {
          titleColor: "some-color",
          textColor: "abcd",
          bgColor: "random-color",
          hideBorder: false,
          cacheSeconds: 1900,
          theme: "new-theme-for-stats",
          locale: "en",
        },
      },
    })
  })
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

  it('should handle data change when stats text color is changed', () => {
    const mockEvent = { target: { value: 'black-color' } };
    const newDataInput = {
      ...dataInput,
<<<<<<< HEAD:src/components/__tests__/addons.test.js
      mediumDynamicBlogs: 'some-medium-blogs-value',
      githubStatsOptions: {
        theme: 'theme-1',
        titleColor: 'some-color',
        bgColor: 'abcd',
        hideBorder: false,
        cacheSeconds: null,
        theme: 'new-theme-for-stats',
        locale: 'en',
      },
    };

    const newSocialInput = {
      medium: '@abcd',
    };
=======
      mediumDynamicBlogs: true,
      githubStatsOptions: {
        textColor: "some-color",
        titleColor: "some-color",
        bgColor: "abcd",
        hideBorder: false,
        cacheSeconds: null,
        theme: "new-theme-for-stats",
        locale: "en",
      },
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    addOnComponent.find('#github-stats-open-btn').simulate('click', {});
    addOnComponent.find('#stats-text-color').simulate('change', mockEvent);

    jest.runAllTimers();

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1);
    expect(mockHandleDataChange).toHaveBeenCalledWith('githubStatsOptions', {
      target: {
        value: {
          theme: 'theme-1',
          titleColor: 'some-color',
          textColor: 'black-color',
          bgColor: 'abcd',
          hideBorder: false,
          cacheSeconds: null,
          theme: 'new-theme-for-stats',
          locale: 'en',
        },
      },
    });
  });

  it('should handle data change when stats local is changed', () => {
    const mockEvent = { target: { value: 'uk' } };
    const newDataInput = {
      ...dataInput,
      mediumDynamicBlogs: 'some-medium-blogs-value',
      githubStatsOptions: {
        theme: 'theme-1',
        titleColor: 'some-color',
        textColor: 'abcd',
        bgColor: 'random-color',
        hideBorder: false,
        cacheSeconds: null,
        theme: 'new-theme-for-stats',
        locale: 'en',
      },
    };

    const newSocialInput = {
      medium: '@abcd',
    };
=======
    )

    addOnComponent.find("#github-stats-open-btn").simulate("click", {})
    addOnComponent.find("#stats-text-color").simulate("change", mockEvent)

    jest.runAllTimers()

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1)
    expect(mockHandleDataChange).toHaveBeenCalledWith("githubStatsOptions", {
      target: {
        value: {
          theme: "new-theme-for-stats",
          titleColor: "some-color",
          textColor: "black-color",
          bgColor: "abcd",
          hideBorder: false,
          cacheSeconds: null,
          locale: "en",
        },
      },
    })
  })

  it("should handle data change when stats local is changed", () => {
    const mockEvent = { target: { value: "uk" } }
    const newDataInput = {
      ...dataInput,
      mediumDynamicBlogs: true,
      githubStatsOptions: {
        theme: "new-theme-for-stats",
        titleColor: "some-color",
        textColor: "abcd",
        bgColor: "random-color",
        hideBorder: false,
        cacheSeconds: null,
        locale: "en",
      },
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    addOnComponent.find('#github-stats-open-btn').simulate('click', {});
    addOnComponent.find('#stats-locale').simulate('change', mockEvent);

    jest.runAllTimers();

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1);
    expect(mockHandleDataChange).toHaveBeenCalledWith('githubStatsOptions', {
      target: {
        value: {
          theme: 'theme-1',
          titleColor: 'some-color',
          textColor: 'abcd',
          bgColor: 'random-color',
          hideBorder: false,
          cacheSeconds: null,
          theme: 'new-theme-for-stats',
          locale: 'uk',
        },
      },
    });
  });
=======
    )

    addOnComponent.find("#github-stats-open-btn").simulate("click", {})
    addOnComponent.find("#stats-locale").simulate("change", mockEvent)

    jest.runAllTimers()

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1)
    expect(mockHandleDataChange).toHaveBeenCalledWith("githubStatsOptions", {
      target: {
        value: {
          titleColor: "some-color",
          textColor: "abcd",
          bgColor: "random-color",
          hideBorder: false,
          cacheSeconds: null,
          theme: "new-theme-for-stats",
          locale: "uk",
        },
      },
    })
  })
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

  it('should handle data change when stats local is changed', () => {
    const mockEvent = { target: { checked: true } };
    const newDataInput = {
      ...dataInput,
<<<<<<< HEAD:src/components/__tests__/addons.test.js
      mediumDynamicBlogs: 'some-medium-blogs-value',
      githubStatsOptions: {
        theme: 'theme-1',
        titleColor: 'some-color',
        textColor: 'abcd',
        bgColor: 'random-color',
        hideBorder: false,
        cacheSeconds: null,
        theme: 'new-theme-for-stats',
        locale: 'en',
      },
    };

    const newSocialInput = {
      medium: '@abcd',
    };
=======
      mediumDynamicBlogs: true,
      githubStatsOptions: {
        titleColor: "some-color",
        textColor: "abcd",
        bgColor: "random-color",
        hideBorder: false,
        cacheSeconds: null,
        theme: "new-theme-for-stats",
        locale: "en",
      },
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    addOnComponent.find('#github-stats-open-btn').simulate('click', {});
    addOnComponent.find('#stats-hide-border').simulate('change', mockEvent);

    jest.runAllTimers();

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1);
    expect(mockHandleDataChange).toHaveBeenCalledWith('githubStatsOptions', {
      target: {
        value: {
          theme: 'theme-1',
          titleColor: 'some-color',
          textColor: 'abcd',
          bgColor: 'random-color',
          hideBorder: true,
          cacheSeconds: null,
          theme: 'new-theme-for-stats',
          locale: 'en',
        },
      },
    });
  });
=======
    )

    addOnComponent.find("#github-stats-open-btn").simulate("click", {})
    addOnComponent.find("#stats-hide-border").simulate("change", mockEvent)

    jest.runAllTimers()

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1)
    expect(mockHandleDataChange).toHaveBeenCalledWith("githubStatsOptions", {
      target: {
        value: {
          titleColor: "some-color",
          textColor: "abcd",
          bgColor: "random-color",
          hideBorder: true,
          cacheSeconds: null,
          theme: "new-theme-for-stats",
          locale: "en",
        },
      },
    })
  })
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

  it('should render Customize Top Skills Card', () => {
    const newDataInput = {
      ...dataInput,
<<<<<<< HEAD:src/components/__tests__/addons.test.js
      mediumDynamicBlogs: 'some-medium-blogs-value',
    };

    const newSocialInput = {
      medium: '@abcd',
    };

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
    );

    addOnComponent.find('#top-languages-open-btn').simulate('click', {});

    expect(addOnComponent).toMatchSnapshot();
  });
=======
      mediumDynamicBlogs: true,
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
    )

    addOnComponent.find("#top-languages-open-btn").simulate("click", {})

    expect(addOnComponent).toMatchSnapshot()
  })
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

  it('should handle data change when top skills theme is changed', () => {
    const mockEvent = { target: { value: 'theme-xyz' } };
    const newDataInput = {
      ...dataInput,
<<<<<<< HEAD:src/components/__tests__/addons.test.js
      mediumDynamicBlogs: 'some-medium-blogs-value',
      topLanguagesOptions: {
        theme: 'theme-2',
        titleColor: 'title-abcd-new',
        textColor: 'random-some-color',
        bgColor: '1234',
        hideBorder: false,
        cacheSeconds: null,
        theme: 'theme-xyz',
        locale: 'us',
      },
    };

    const newSocialInput = {
      medium: '@abcd',
    };
=======
      mediumDynamicBlogs: true,
      topLanguagesOptions: {
        titleColor: "title-abcd-new",
        textColor: "random-some-color",
        bgColor: "1234",
        hideBorder: false,
        cacheSeconds: null,
        theme: "theme-xyz",
        locale: "us",
      },
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = mount(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    addOnComponent.find('#top-languages-open-btn').simulate('click', {});
    addOnComponent.find('#top-lang-theme').simulate('change', mockEvent);

    jest.runAllTimers();

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1);
    expect(mockHandleDataChange).toHaveBeenCalledWith('topLanguagesOptions', {
      target: {
        value: {
          theme: 'theme-2',
          titleColor: 'title-abcd-new',
          textColor: 'random-some-color',
          bgColor: '1234',
          hideBorder: false,
          cacheSeconds: null,
          theme: 'theme-xyz',
          locale: 'us',
        },
      },
    });
  });

  it('should handle check change when add on item inputs are changed', () => {
    const mockEvent = { target: { value: 'This is a mock event' } };
=======
    )

    addOnComponent.find("#top-languages-open-btn").simulate("click", {})
    addOnComponent.find("#top-lang-theme").simulate("change", mockEvent)

    jest.runAllTimers()

    expect(mockHandleDataChange).toHaveBeenCalledTimes(1)
    expect(mockHandleDataChange).toHaveBeenCalledWith("topLanguagesOptions", {
      target: {
        value: {
          titleColor: "title-abcd-new",
          textColor: "random-some-color",
          bgColor: "1234",
          hideBorder: false,
          cacheSeconds: null,
          theme: "theme-xyz",
          locale: "us",
        },
      },
    })
  })

  it("should handle check change when add on item inputs are changed", () => {
    const mockEvent = { target: { value: "This is a mock event" } }
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = mount(
      <Addons
        data={dataInput}
        social={socialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    addOnComponent.find('#visitors-count').simulate('change', mockEvent);
    addOnComponent.find('#github-profile-trophy').simulate('change', mockEvent);
    addOnComponent.find('#github-stats').simulate('change', mockEvent);
    addOnComponent.find('#top-languages').simulate('change', mockEvent);
    addOnComponent.find('#twitter-badge').simulate('change', mockEvent);
    addOnComponent.find('#dev-dynamic-blogs').simulate('change', mockEvent);
    addOnComponent.find('#rss-dynamic-blogs').simulate('change', mockEvent);
    addOnComponent.find('#medium-dynamic-blogs').simulate('change', mockEvent);

    expect(mockHandleCheckChange).toHaveBeenCalledTimes(8);
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(1, 'visitorsBadge');
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(2, 'githubProfileTrophy');
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(3, 'githubStats');
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(4, 'topLanguages');
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(5, 'twitterBadge');
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(6, 'devDynamicBlogs');
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(7, 'rssDynamicBlogs');
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(8, 'mediumDynamicBlogs');
  });

  it('should display workflow details if devDynamicBlogs and dev social data are available', () => {
    const newDataInput = {
      ...dataInput,
      devDynamicBlogs: 'some-value',
    };

    const newSocialInput = {
      dev: 'some-value-123',
    };
=======
    )

    addOnComponent.find("#visitors-count").simulate("change", mockEvent)
    addOnComponent.find("#github-profile-trophy").simulate("change", mockEvent)
    addOnComponent.find("#github-stats").simulate("change", mockEvent)
    addOnComponent.find("#top-languages").simulate("change", mockEvent)
    addOnComponent.find("#twitter-badge").simulate("change", mockEvent)
    addOnComponent.find("#dev-dynamic-blogs").simulate("change", mockEvent)
    addOnComponent.find("#rss-dynamic-blogs").simulate("change", mockEvent)
    addOnComponent.find("#medium-dynamic-blogs").simulate("change", mockEvent)

    expect(mockHandleCheckChange).toHaveBeenCalledTimes(8)
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(1, "visitorsBadge")
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(
      2,
      "githubProfileTrophy"
    )
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(3, "githubStats")
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(4, "topLanguages")
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(5, "twitterBadge")
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(6, "devDynamicBlogs")
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(7, "rssDynamicBlogs")
    expect(mockHandleCheckChange).toHaveBeenNthCalledWith(
      8,
      "mediumDynamicBlogs"
    )
  })

  it("should display workflow details if devDynamicBlogs and dev social data are available", () => {
    const newDataInput = {
      ...dataInput,
      devDynamicBlogs: true,
    }

    const newSocialInput = {
      dev: "some-value-123",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = shallow(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    const workflowElement = addOnComponent.find('.workflow');
    expect(workflowElement).toMatchSnapshot();
  });
=======
    )

    const workflowElement = addOnComponent.find(".workflow")
    expect(workflowElement).toMatchSnapshot()
  })
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

  it('should display workflow details if rssDynamicBlogs and rss url data are available', () => {
    const newDataInput = {
      ...dataInput,
<<<<<<< HEAD:src/components/__tests__/addons.test.js
      rssDynamicBlogs: 'some-rss-value',
    };

    const newSocialInput = {
      rssurl: 'url-random',
    };
=======
      rssDynamicBlogs: true,
    }

    const newSocialInput = {
      rssurl: "url-random",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = shallow(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    const workflowElement = addOnComponent.find('.workflow');
    expect(workflowElement).toMatchSnapshot();
  });
=======
    )

    const workflowElement = addOnComponent.find(".workflow")
    expect(workflowElement).toMatchSnapshot()
  })
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

  it('should display workflow details if mediumDynamicBlogs, medium social data are available', () => {
    const newDataInput = {
      ...dataInput,
<<<<<<< HEAD:src/components/__tests__/addons.test.js
      mediumDynamicBlogs: 'some-medium-blogs-value',
    };

    const newSocialInput = {
      medium: '@abcd',
    };
=======
      mediumDynamicBlogs: true,
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = shallow(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    const workflowElement = addOnComponent.find('.workflow');
    expect(workflowElement).toMatchSnapshot();
  });

  it('should call document create element when blog post workflow is clicked', () => {
    let someElement = document.createElement('abcd');
    document.createElement = jest.fn().mockReturnValueOnce(someElement);

    const newDataInput = {
      ...dataInput,
      mediumDynamicBlogs: 'some-medium-blogs-value',
    };

    const newSocialInput = {
      medium: '@abcd',
    };
=======
    )

    const workflowElement = addOnComponent.find(".workflow")
    expect(workflowElement).toMatchSnapshot()
  })

  it("should call document create element when blog post workflow is clicked", () => {
    let someElement = document.createElement("abcd")
    document.createElement = jest.fn().mockReturnValueOnce(someElement)

    const newDataInput = {
      ...dataInput,
      mediumDynamicBlogs: true,
    }

    const newSocialInput = {
      medium: "@abcd",
    } as ProfileInfo["social"]
>>>>>>> typescript:src/components/__tests__/addons.test.tsx

    const addOnComponent = shallow(
      <Addons
        data={newDataInput}
        social={newSocialInput}
        handleCheckChange={mockHandleCheckChange}
        handleDataChange={mockHandleDataChange}
      />
<<<<<<< HEAD:src/components/__tests__/addons.test.js
    );

    addOnComponent.find('#blog-post-worklow-span').simulate('click', {});
    expect(document.createElement).toHaveBeenCalledTimes(1);
  });
});
=======
    )

    addOnComponent.find("#blog-post-worklow-span").simulate("click", {})
    expect(document.createElement).toHaveBeenCalledTimes(1)
  })
})
>>>>>>> typescript:src/components/__tests__/addons.test.tsx
