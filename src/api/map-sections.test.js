import {
  mapImageGrid,
  mapSections,
  mapTextGrid,
  sectionTypes,
} from './map-sections';
import fakeData from './data.json';

describe('map-sections', () => {
  it('should render predefined section without data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(fakeData.data[0].attributes.sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const WithNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);
    expect(WithNoComponent).toEqual([{}]);
  });

  it('should test section.section-grid with no text_grid or image_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map sections two columns without', () => {
    const data = sectionTypes['section.section-two-columns']();

    expect(data.text).toBe('');
    expect(data.title).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.background).toBe(false);
  });

  it('should map sections two columns with data', () => {
    const data = sectionTypes['section.section-two-columns']({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'my text',
      image: {
        data: {
          attributes: {
            url: 'image.svg',
          },
        },
      },
      metadata: {
        section_id: 'home',
        background: true,
      },
    });

    expect(data.title).toBe('title');
    expect(data.text).toBe('my text');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('image.svg');
    expect(data.component).toBe('section.section-two-columns');
  });

  it('should map section content without data', () => {
    const data = sectionTypes['section.section-content']();

    expect(data.html).toBe('');
    expect(data.title).toBe('');
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.background).toBe(false);
  });

  it('should map section content with data', () => {
    const data = sectionTypes['section.section-content']({
      __component: 'section.section-content',
      title: 'Pricing',
      content: 'abc',
      metadata: {
        background: false,
        section_id: 'pricing',
      },
    });

    expect(data.html).toBe('abc');
    expect(data.title).toBe('Pricing');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('pricing');
    expect(data.component).toBe('section.section-content');
  });

  it('should map grid text without data', () => {
    const data = mapTextGrid([]);

    expect(data.title).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
  });

  it('should map grid text  with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Coisa',
        },
        {
          title: 'Teste 2',
          description: 'abc',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });

    expect(data.background).toBe(true);
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('abc');
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Coisa');
    expect(data.component).toBe('section.section-grid-text');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'abc',
            url: 'a.svg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });

    expect(data.title).toBe('Gallery');
    expect(data.background).toBe(false);
    expect(data.description).toBe('abc');
    expect(data.sectionId).toBe('gallery');
    expect(data.grid[0].altText).toBe('abc');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.component).toBe('section.section-grid-image');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid(undefined);

    expect(data.title).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
  });
});
