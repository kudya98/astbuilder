const defaultPrograms = {
  javascript: 'const a = [1, true, () => {}]',
  php: '<?php\n' +
      '// Комментарий\n' +
      'function sum($a, $b) {\n' +
      '    return $a + $b;\n' +
      '}\n' +
      '/* Блочный\n' +
      'Комментарий */\n' +
      '$num1 = 2;\n' +
      '$num2 = 3;\n' +
      'sum($num1, $num2);\n' +
      '?>',
  c: '#include <stdio.h>\n' +
      ' \n' +
      'int main()\n' +
      '{\n' +
      '  printf("Hello World\\n");\n' +
      '  return 0;\n' +
      '}',
  java: 'import java.util;\n' +
      'class HelloWorld {\n' +
      '    public static void main(String[] args) {\n' +
      '        System.out.println("Hello World!");\n' +
      '    }\n' +
      '}'
}

export default defaultPrograms
