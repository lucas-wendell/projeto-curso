export const mapTextGrid = (section = []) => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((text) => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = []) => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img) => {
      const {
        image: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
  };
};

export const sectionTypes = {
  'section.section-two-columns': (section = {}) => {
    const {
      __component: component = '',
      title = '',
      description: text = '',
      metadata: { background = false, section_id: sectionId = '' } = false,
    } = section;
    const srcImg = section?.image?.data?.attributes?.url || '';

    return {
      component,
      title,
      text,
      srcImg,
      background,
      sectionId,
    };
  },
  'section.section-content': (section = {}) => {
    const {
      __component: component = '',
      title = '',
      content: html = '',
      metadata: { background = false, section_id: sectionId = '' } = false,
    } = section;

    return {
      component,
      title,
      html,
      background,
      sectionId,
    };
  },
  'section.section-grid': (section) => {
    const { text_grid = [], image_grid = [] } = section;

    if (text_grid.length > 0) {
      return mapTextGrid(section);
    }

    if (image_grid.length > 0) {
      return mapImageGrid(section);
    }
    return section;
  },
};

export const mapSections = (sections = []) => {
  return sections.map((section) => {
    const sectionFn = sectionTypes[section.__component];

    if (sectionFn) return sectionFn(section);
    return section;
  });
};
