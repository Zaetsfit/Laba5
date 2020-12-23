// import {Router} from '../app.js'
import {Router} from '../app.js'


describe('Complex Module', () => {
    beforeAll(() => {
        document.body.innerHTML = `<div class="main-container"></div>`
    });
    it('should render block of cards', () => {
        const new_page = jest.fn();
    });

    const catalog_page = '/action';
    expect(document.body.innerHTML).toEqual(`<div class="main-container"></div>`);
    Router(catalog_page);
    expect(document.body.innerHTML).toEqual(`<div class="main-container"><div class="action_container"></div></div>`)
})