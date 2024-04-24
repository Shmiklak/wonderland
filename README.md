<div align="center">
    <h1>Wonderland of Wisdom</h1>
</div>

<div align="center">
    <img alt="Application logo" src="https://marvollo.s-ul.eu/65j0e899" width="300"/>
</div>

# Description

Constant development and improvement of technologies and video gaming industry respectively has always caught attention of professionals from different industries to see potential areas to improve their performance. Often when discussing video games educators focus a lot on the social consequences of video games and see them as a big threat, however a big portion of researches has shown positive impact of video games as well as their educational potential. Since technology is more accessible nowadays and can be found everywhere from homes and schools it is important to maximize the possible positive outcomes it may bring.

This project's main aim is to bring video games into the educational sphere in primary schools to make the process more engaging through competetive games as well as an integration with OpenAI's ChatGPT to ensure children facing issues with certain problems can easily solve them by talking to in-built AI assistant Vitalina.

# Requirements

In order to run the project you need a web-server with the following dependencies:

| Technology    | Version |
| -------- | ------- |
| PHP      | 8.1 or higher    |
| PostgreSQL | 13 or higher     |
| NPM | 18.19.0 or higher     |
| Python | 13.10.0 or higher     |

# Main Dependencies

The project was built using the following open source libraries and frameworks:

| Technology    | Version |
| -------- | ------- |
| Laravel    | 10.10    |
| React.js    | 1.4.2    |
| Laravel Inertia    | 0.6.3    |
| OpenAI PHP Client    | 0.8.4    |

# Installation

First of all you need to install all dependencies. Run the following command:

```bash
composer install
npm install
```

After the installation completes ensure to build all frontend assets using the following command:

```bash
npm run build
```

Once assets built is ready ensure to setup all required variables inside `.env` file, these include but not limited to database connection parameters, OpenAI token. After that the project should be ready to prepare the database for your copy by running:

```bash
php artisan migrate
```

Once the database migration is complete you want to fill the `questions` table with questions for each available game in order to ensure there is something for the project to display. This can be achieved through either generating them via generator Python scripts included in the project under `database/generators` or doing so manually.

# License

MIT License

Copyright (c) [2024] [Doston Shametov]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.