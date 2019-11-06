const defaultPrograms = {
  javascript: 'const a = [1, true, () => {}]',
  php: '<?php\n' +
      'function getFib($n)\n' +
      '{\n' +
      '    return round(pow((sqrt(5)+1)/2, $n) / sqrt(5));\n' +
      '}\n' +
      '?>',
  java: 'class HelloWorld {\n' +
      '    public static void main(String[] args) {\n' +
      '        System.out.println("Hello World!");\n' +
      '    }\n' +
      '}'
}

export default defaultPrograms
