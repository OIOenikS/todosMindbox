const baseUrl = 'http://localhost:8080/';

function getList() {
  return cy.get('[data-testid=todo-list]')
}

function addInputText(text: string) {
  cy.get('[data-testid=input-todo]')
    .type(text)
    .type('{enter}')
}

function addThreeTasks() {
  const inputText1 = 'Задача 1';
  cy.get('[data-testid=input-todo]')
  addInputText(inputText1)
  getList()
    .children()
      .should('have.length', 1);

  const inputText2 = 'Задача 2';
  addInputText(inputText2)
  getList()
    .children()
      .should('have.length', 2);

  const inputText3 = 'Задача 3';
  addInputText(inputText3)
  getList()
    .children()
      .should('have.length', 3);
}

function getFirstItemList() {
  return getList().children().first();
}

function getButtonFirstItemList() {
  return getFirstItemList().children().first()
}

describe('Тестирование приложения todoMindbox', function() {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Добавление задач', function() {
    addThreeTasks();
  })

  it('Изменения статуса задачи', function() {
    addThreeTasks();
  
    getButtonFirstItemList().invoke('attr', 'class').should('not.include', 'bttn-completed');
    getFirstItemList().invoke('attr', 'class').should('not.include', 'container-completed');

    getButtonFirstItemList().click();
    getButtonFirstItemList().invoke('attr', 'class').should('include', 'bttn-completed');
    getFirstItemList().invoke('attr', 'class').should('include', 'container-completed');

    getButtonFirstItemList().click();
    getButtonFirstItemList().invoke('attr', 'class').should('not.include', 'bttn-completed');
    getFirstItemList().invoke('attr', 'class').should('not.include', 'container-completed');
  })

  it('Переключение кнопок панели управления', function() {
    //добавляем 3 задачи
    addThreeTasks();
    
    //Меняем статус первой задачи с 'acive' на 'completed'
    getButtonFirstItemList().click();
    getButtonFirstItemList().invoke('attr', 'class').should('include', 'bttn-completed');
    getFirstItemList().invoke('attr', 'class').should('include', 'container-completed');
    
    //выбираем активные задачи, в списке оставется 2 задачи
    cy.get('[data-testid="bttn-active"]').click();
    getList().children().should('have.length', 2);

    //выбираем завершеные задачи, в списке оставется 1 задача
    cy.get('[data-testid="bttn-completed"]').click();
    getList().children().should('have.length', 1);

    //выбираем все задачи, в списке всего 3 задача
    cy.get('[data-testid="bttn-all"]').click();
    getList().children().should('have.length', 3);

    //Удаляем завершеные задачи, в списке оставется 2 активные задачи
    cy.get('[data-testid="bttn-clear-completed"]').click();
    getList().children().should('have.length', 2);
  })
});