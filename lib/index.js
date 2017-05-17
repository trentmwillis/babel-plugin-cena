const markup = require('./markup');

function Cena(babel) {
  const t = babel.types;

  return {
    visitor: {
      Program: {
        exit(path) {
          const newProgram = t.program( [
            t.expressionStatement(
              t.assignmentExpression(
                '=',
                t.memberExpression(
                  t.memberExpression(
                    t.identifier('document'),
                    t.identifier('body')
                  ),
                  t.identifier('innerHTML')
                ),
                t.stringLiteral(markup)
              )
            )
          ] );

          path.replaceWith(newProgram);
          path.stop();
        }
      }
    }
  }
}

module.exports = Cena;
