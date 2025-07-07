// script.js

document.addEventListener('DOMContentLoaded', () => {
    const area = document.querySelector('.area');
    const buttons = document.querySelectorAll('.btn');

    let expression = '';
    let bracketToggle = true;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            const action = button.dataset.action;

            switch (action) {
                case 'clear':
                    expression = '';
                    area.textContent = '';
                    break;

                case 'bracket':
                    expression += bracketToggle ? '(' : ')';
                    bracketToggle = !bracketToggle;
                    area.textContent = expression;
                    break;

                case 'modulo':
                    expression += '%';
                    area.textContent = expression;
                    break;

                case 'devide':
                    expression += '/';
                    area.textContent = expression;
                    break;

                case 'multiply':
                    expression += '*';
                    area.textContent = expression;
                    break;

                case 'substract':
                    expression += '-';
                    area.textContent = expression;
                    break;

                case 'add':
                    expression += '+';
                    area.textContent = expression;
                    break;

                case 'calculate':
                    try {
                        const result = eval(expression);
                        expression = ''; // reset expression
                        area.textContent = result;
                    } catch (error) {
                        area.textContent = 'Error';
                        expression = '';
                    }
                    break;

                default:
                    // Append numbers or dots (.)
                    expression += value;
                    area.textContent = expression;
                    break;
            }
        });
    });
});
