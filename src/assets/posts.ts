export interface Post {
  id: number;
  title: string;
  desc: string;
  content: string;
  create_time: number;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "适用于React且支持渲染svg字符串的图标组件",
    desc: "",
    content: `
svg图标可以直接从[icones](https://icones.js.org/)获取json格式，所以你的图标库理论上可以非常丰富。具体操作如下：

找到自己喜欢的图标库之后，点击右上角的菜单按钮
![WX20240803-103602@2x.png][1]

然后点击\`json\`就会自动下载json文件，里面带有改图标库的所有的图标

![WX20240803-103508@2x.png][2]

组件内容如下
\`\`\`tsx
// SvgIcon.tsx
import React from "react";
import iconData from "@/assets/svgIcon.json";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: keyof typeof iconData;
  size?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = "1rem",
  className = "",
  ...rest
}) => {
  const svg = iconData[name];

  if (!svg) {
    console.error(\`Icon with name "$\{name\}" not found.\`);
    return null;
  }

  const modifiedSvgContent = svg
    .replace(/width="[^"]*"/, \`width="$\{size\}"\`)
    .replace(/height="[^"]*"/, \`height="$\{size\}"\`);

  return (
    <span
      className={\`icon-$\{name\} $\{className\}\`}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: modifiedSvgContent }}
      aria-hidden="true"
      {...rest}
    />
  );
};

export default Icon;
\`\`\`

这里我提供一个简单的图标文件
\`\`\`json
// svgIcon.json
{
  "gitee": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.59.59 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z\"/></svg>",
  "24-hours-fill": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M12.005 13.003a3 3 0 0 1 2.08 5.162l-1.91 1.837h2.83v2h-6l-.001-1.724l3.694-3.555a1 1 0 1 0-1.693-.72h-2a3 3 0 0 1 3-3m6 0v4h2v-4h2v9h-2v-3h-4v-6zm-14-1a7.985 7.985 0 0 0 3 6.246v2.416a9.996 9.996 0 0 1-5-8.662zm8-10c5.185 0 9.449 3.946 9.95 9h-2.012A8.001 8.001 0 0 0 5.87 6.868l2.135 2.135h-6v-6L4.45 5.449a9.977 9.977 0 0 1 7.554-3.446\"/></svg>"
}
\`\`\`


  [1]: https://www.zowlsat.com/usr/uploads/2024/08/3430350954.png
  [2]: https://www.zowlsat.com/usr/uploads/2024/08/2506618291.png
  `,
    create_time: 1723521109428,
  },
  {
    id: 2,
    title: "React框架Todo案例",
    desc: "",
    content: `
  将这个待办事项应用转换为 TypeScript 版本可以帮助你更好地理解 TypeScript 在 React 中的应用。TypeScript 提供了类型检查和自动补全功能，能够有效提高代码的安全性和可维护性。以下是完整的 TypeScript 版教程。

### 1. 创建 TypeScript 项目

如果你还没有安装 TypeScript，可以通过以下命令安装并初始化一个新的 React TypeScript 项目：

\`\`\`bash
npx create-react-app todo-app --template typescript
cd todo-app
npm start
\`\`\`

这个命令会自动生成一个带有 TypeScript 支持的 React 项目。

### 2. 创建 \`TodoItem\` 组件

我们首先定义 \`TodoItem\` 组件，并为组件的 props 类型创建一个接口。

\`\`\`typescript
// src/components/TodoItem.tsx

import React from 'react';

// 定义 Todo 的类型
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// 定义 TodoItem 的 props 类型
interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    return (
        <div style={styles.container}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>删除</button>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        "align-items": 'center',
        marginBottom: '8px',
    },
};

export default TodoItem;
\`\`\`

### 3. 创建 \`TodoList\` 组件

我们接着创建 \`TodoList\` 组件，并定义对应的 props 类型。

\`\`\`typescript
// src/components/TodoList.tsx

import React from 'react';
import TodoItem from './TodoItem';

// 定义 Todo 的类型
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// 定义 TodoList 的 props 类型
interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
    return (
        <div>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TodoList;
\`\`\`

### 4. 创建 \`TodoApp\` 组件

最后，我们创建 \`TodoApp\` 组件，并添加状态管理和事件处理函数。

\`\`\`typescript
// src/TodoApp.tsx

import React, { useState } from 'react';
import TodoList from './components/TodoList';

// 定义 Todo 的类型
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    // 处理添加任务的函数
    const handleAddTodo = () => {
        if (newTodo.trim() === '') return;

        const newTask: Todo = {
            id: Date.now(),
            text: newTodo,
            completed: false,
        };

        setTodos([...todos, newTask]);
        setNewTodo('');
    };

    // 处理切换任务完成状态的函数
    const handleToggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // 处理删除任务的函数
    const handleDeleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div style={styles.container}>
            <h1>待办事项</h1>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={handleAddTodo}>添加任务</button>
            </div>
            <TodoList todos={todos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
        </div>
    );
}

const styles = {
    container: {
        width: '300px',
        margin: '0 auto',
        textAlign: 'center',
    },
};

export default TodoApp;
\`\`\`

### 5. 修改 \`App.tsx\` 以渲染 \`TodoApp\`

将主应用组件修改为渲染我们的 \`TodoApp\`。

\`\`\`typescript
// src/App.tsx

import React from 'react';
import TodoApp from './TodoApp';

function App() {
    return (
        <div className="App">
            <TodoApp />
        </div>
    );
}

export default App;
\`\`\`

### 运行项目

保存所有文件，确保开发服务器正在运行，然后打开浏览器查看效果。你会看到一个使用 TypeScript 实现的待办事项应用，提供了添加、标记完成和删除任务的功能。

### 结论

通过这个 TypeScript 版的待办事项项目，你已经了解了如何在 React 中使用 TypeScript 进行开发。TypeScript 为代码提供了静态类型检查功能，帮助我们捕获潜在的错误，并提高代码的可读性和维护性。希望这个项目实战能帮助你更好地理解 React 和 TypeScript 的结合应用。
  `,
    create_time: 1723521109428,
  },
  {
    id: 3,
    title: "React入门语法教程",
    desc: "",
    content: `
    好的，下面是一个使用 TypeScript 编写的 React 基础语法教程。我们将涵盖组件、JSX、属性和状态、事件处理、条件渲染、列表渲染、表单处理、生命周期方法和 Hooks。

## 1. 环境准备

首先，确保你已经安装了 Node.js 和 npm（或 yarn）。然后，你可以使用 Create React App 创建一个 TypeScript 项目：

\`\`\`bash
npx create-react-app my-app --template typescript
cd my-app
npm start
\`\`\`

## 2. 组件

### 2.1 函数组件

函数组件可以使用 TypeScript 定义属性（props）类型：

\`\`\`tsx
import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = (props) => {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
\`\`\`

### 2.2 类组件

类组件使用 TypeScript 定义状态和属性类型：

\`\`\`tsx
import React, { Component } from 'react';

interface GreetingProps {
  name: string;
}

interface GreetingState {
  count: number;
}

class Greeting extends Component<GreetingProps, GreetingState> {
  constructor(props: GreetingProps) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Greeting;
\`\`\`

## 3. JSX

JSX 在 TypeScript 中的使用和 JavaScript 类似，但可以通过类型检查来确保更高的安全性：

\`\`\`tsx
const element: JSX.Element = <h1>Hello, world!</h1>;
\`\`\`

## 4. 属性和状态

### 4.1 属性（Props）

属性在函数组件和类组件中都可以定义类型：

\`\`\`tsx
interface WelcomeProps {
  name: string;
}

const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  return <h1>Welcome, {name}!</h1>;
}

// 使用组件
<Welcome name="Alice" />
\`\`\`

### 4.2 状态（State）

类组件中的状态使用 TypeScript 进行类型定义：

\`\`\`tsx
import React, { Component } from 'react';

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
\`\`\`

## 5. 事件处理

React 处理事件时，TypeScript 会进行类型检查：

\`\`\`tsx
const Button: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
}
\`\`\`

## 6. 条件渲染

在 JSX 中可以使用 JavaScript 表达式进行条件渲染：

\`\`\`tsx
interface GreetingProps {
  isLoggedIn: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
    </div>
  );
}
\`\`\`

## 7. 列表渲染

使用 \`map\` 方法遍历数组，并生成元素列表：

\`\`\`tsx
interface NumberListProps {
  numbers: number[];
}

const NumberList: React.FC<NumberListProps> = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number.toString()}>{number}</li>
      ))}
    </ul>
  );
}
\`\`\`

## 8. 表单处理

React 的表单处理通过组件的状态来实现，通常使用受控组件的方式：

\`\`\`tsx
import React, { useState } from 'react';

const NameForm: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert('A name was submitted: ' + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

## 9. 生命周期方法

类组件提供了生命周期方法，TypeScript 中也可以正常使用：

\`\`\`tsx
import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    console.log('Component did mount!');
  }

  render() {
    return <div>Hello World</div>;
  }
}
\`\`\`

## 10. Hooks

Hooks 是 React 16.8 引入的特性，用于在函数组件中使用状态和其他 React 特性。最常用的 Hook 是 \`useState\` 和 \`useEffect\`：

### 10.1 useState

\`\`\`tsx
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

### 10.2 useEffect

\`useEffect\` 用于处理副作用，例如数据获取、订阅等：

\`\`\`tsx
import React, { useState, useEffect } from 'react';

const Example: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = \`You clicked $\{count\} times\`;
  }, [count]); // 依赖项数组

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
\`\`\`

## 总结

本文介绍了使用 TypeScript 编写的 React 基础语法，包括组件、JSX、属性和状态、事件处理、条件渲染、列表渲染、表单处理、生命周期方法和 Hooks。掌握这些基础知识后，你可以开始构建更复杂的 TypeScript 和 React 应用。继续学习和实践这些概念，将帮助你成为一个熟练的 React 开发者。
    `,
    create_time: 1723521109428,
  },
];
