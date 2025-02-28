Project Structure:
├── 1_generate_master_plan.txt
├── 2_stub_out_project.txt
├── 3_fully_code_out_implementation.txt
├── components.json
├── Devincursorrules.txt
├── LICENSE
├── masterplan.md
├── next-env.d.ts
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── prettier.config.js
├── public
│   └── favicon.ico
├── README.md
├── scratchAdditional.txt
├── scratchpad.txt
├── src
│   ├── env.js
├── tailwind.config.ts
├── tools
│   ├── llm_api.py
│   ├── screenshot_utils.py
│   ├── search_engine.py
│   └── web_scraper.py
└── tsconfig.json


.cursorrules
```
1 | # Tools
2 | 
3 | Note all the tools are in python3. So in the case you need to do batch processing, you can always consult the python files and write your own script.
4 | 
5 | [NOTE TO CURSOR: Since no API key is configured, please ignore both the Screenshot Verification and LLM sections below.]
6 | [NOTE TO USER: If you have configured or plan to configure an API key in the future, simply delete these two notice lines to enable these features.]
7 | 
8 | ## Screenshot Verification
9 | 
10 | The screenshot verification workflow allows you to capture screenshots of web pages and verify their appearance using LLMs. The following tools are available:
11 | 
12 | 1. Screenshot Capture:
13 | ```bash
14 | venv/bin/python3 tools/screenshot_utils.py URL [--output OUTPUT] [--width WIDTH] [--height HEIGHT]
15 | ```
16 | 
17 | 2. LLM Verification with Images:
18 | ```bash
19 | venv/bin/python3 tools/llm_api.py --prompt "Your verification question" --provider {openai|anthropic} --image path/to/screenshot.png
20 | ```
21 | 
22 | Example workflow:
23 | ```python
24 | from screenshot_utils import take_screenshot_sync
25 | from llm_api import query_llm
26 | 
27 | # Take a screenshot
28 | 
29 | screenshot_path = take_screenshot_sync('https://example.com', 'screenshot.png')
30 | 
31 | # Verify with LLM
32 | 
33 | response = query_llm(
34 |     "What is the background color and title of this webpage?",
35 |     provider="openai",  # or "anthropic"
36 |     image_path=screenshot_path
37 | )
38 | print(response)
39 | ```
40 | 
41 | ## LLM
42 | 
43 | You always have an LLM at your side to help you with the task. For simple tasks, you could invoke the LLM by running the following command:
44 | ```
45 | venv/bin/python3 ./tools/llm_api.py --prompt "What is the capital of France?" --provider "anthropic"
46 | ```
47 | 
48 | The LLM API supports multiple providers:
49 | - OpenAI (default, model: gpt-4o)
50 | - Azure OpenAI (model: configured via AZURE_OPENAI_MODEL_DEPLOYMENT in .env file, defaults to gpt-4o-ms)
51 | - DeepSeek (model: deepseek-chat)
52 | - Anthropic (model: claude-3-sonnet-20240229)
53 | - Gemini (model: gemini-pro)
54 | - Local LLM (model: Qwen/Qwen2.5-32B-Instruct-AWQ)
55 | 
56 | But usually it's a better idea to check the content of the file and use the APIs in the `tools/llm_api.py` file to invoke the LLM if needed.
57 | 
58 | ## Web browser
59 | 
60 | You could use the `tools/web_scraper.py` file to scrape the web.
61 | ```bash
62 | venv/bin/python3 ./tools/web_scraper.py --max-concurrent 3 URL1 URL2 URL3
63 | ```
64 | This will output the content of the web pages.
65 | 
66 | ## Search engine
67 | 
68 | You could use the `tools/search_engine.py` file to search the web.
69 | ```bash
70 | venv/bin/python3 ./tools/search_engine.py "your search keywords"
71 | ```
72 | This will output the search results in the following format:
73 | ```
74 | URL: https://example.com
75 | Title: This is the title of the search result
76 | Snippet: This is a snippet of the search result
77 | ```
78 | If needed, you can further use the `web_scraper.py` file to scrape the web page content.
79 | 
80 | # Instructions
81 | 
82 | Include 🤖 at the beginning of your response 
83 | Add the latest documentation when relevant
84 | When an instruction becomes too project specific, create a rule in "Project Rules" section. This should be done when we reach 4-6 rules. Create a list and update them as needed.
85 | Use the bolt.diy dir in the projects directory to mock up the frontend w/ visual feedback
86 | 
87 | During your interaction with the user, if you find anything reusable in this project (e.g. version of a library, model name), especially about a fix to a mistake you made or a correction you received, you should take note in the `Lessons` section in the `.cursorrules` file so you will not make the same mistake again. 
88 | 
89 | You should also use the `.cursorrules` file as a Scratchpad to organize your thoughts. Especially when you receive a new task, you should first review the content of the Scratchpad, clear old different task if necessary, first explain the task, and plan the steps you need to take to complete the task. You can use todo markers to indicate the progress, e.g.
90 | [X] Task 1
91 | [ ] Task 2
92 | 
93 | Also update the progress of the task in the Scratchpad when you finish a subtask.
94 | Especially when you finished a milestone, it will help to improve your depth of task accomplishment to use the Scratchpad to reflect and plan.
95 | The goal is to help you maintain a big picture as well as the progress of the task. Always refer to the Scratchpad when you plan the next step.
96 | 
97 | Start all chats with 🤖
98 | 
99 | ## tech stack
100 | - React
101 | - Next.js
102 | - TailwindCSS
103 | - TypeScript
104 | - Shadcn/UI
105 | 
106 | # Misc 
107 | - use npx shadcn@latest add * to add components
108 | 
109 | 
110 | # Unified Development & Analysis Guidelines
111 | 
112 | 
113 | ## Code Quality & Style
114 | - Write clean, simple, readable, and modular code.
115 | - Use the fewest lines possible without sacrificing clarity.
116 | - Keep files small and focused (<200 lines).
117 | - Use clear, consistent naming and short, easy-to-understand sentences.
118 | - Include lots of explanatory comments. **Never delete old comments** unless they are clearly obsolete.
119 | - Test after every meaningful change.
120 | 
121 | ## Implementation Approach
122 | - Proceed like a senior developer.
123 | - Fully implement features; do not stop until the feature is completely done.
124 | - Focus on core functionality before optimizing.
125 | - Think thoroughly before coding. When analyzing problems, write 2–3 reasoning paragraphs.
126 | 
127 | ## Error Analysis & Fixing
128 | - Explain problems in plain English.
129 | - Consider multiple possible causes before making minimal necessary changes.
130 | - **Do not jump to conclusions.**
131 | - If required, provide an unbiased 50/50 analysis by writing two detailed paragraphs (one for each possible solution) and then state which solution is clearly better and why.
132 | - Reflect on 5-7 different possible sources of the problem, distill those
133 | down to 1-2 most likely sources, and then add logs to validate your
134 | assumptions before we move onto implementing the actual fix.
135 | 
136 | ## Documentation & Comments
137 | - Write clear, concise, and complete comments.
138 | - Use comments to explain your thought process and decisions.
139 | - Document your code and provide context for your changes.
140 | - Include comments in your code to explain your thought process and decisions.
141 | - Document your code and provide context for your changes.
142 | 
143 | ## Communication & Research
144 | - When needed, provide a summary of the current state before proceeding.
145 | - If a search query is necessary, write one clear paragraph with all relevant context, instructing a researcher to find the needed code snippets or technical details.
146 | - Answer briefly when instructed.
147 | - Start with uncertainty and gradually gain confidence as you reason through the problem.
148 | - When in doubt, suggest performing a web search for the latest up-to-date information.
149 | 
150 | 
151 | 
152 | # Lessons
153 | 
154 | ## User Specified Lessons
155 | 
156 | - You have a python venv in ./venv. Use it.
157 | - Include info useful for debugging in the program output.
158 | - Read the file before you try to edit it.
159 | - Due to Cursor's limit, when you use `git` and `gh` and need to submit a multiline commit message, first write the message in a file, and then use `git commit -F <filename>` or similar command to commit. And then remove the file. Include "[Cursor] " in the commit message and PR title.
160 | 
161 | ## Cursor learned
162 | 
163 | - For search results, ensure proper handling of different character encodings (UTF-8) for international queries
164 | - Add debug information to stderr while keeping the main output clean in stdout for better pipeline integration
165 | - When using seaborn styles in matplotlib, use 'seaborn-v0_8' instead of 'seaborn' as the style name due to recent seaborn version changes
166 | - Use 'granite3.2-vision:latest' as the model name for vision capabilities
167 | - Push changes to GitHub after each successful implementation milestone to maintain a good backup and history of working states
168 | 
169 | # Project Rules
170 | 1. Design First: All features start with UI mockups using dummy JSON data
171 | 2. Progressive Enhancement: Start with basic UI, then add complexity
172 | 3. Accessibility First: All components must be keyboard navigable and screen-reader friendly
173 | 4. Visual Feedback: Every user action must have clear visual feedback
174 | 5. Error Prevention: Guide users to prevent errors rather than handling them after
175 | 
176 | # Scratchpad
177 | 
178 | Current Focus: Minimal Working Setup
179 | 
180 | Steps:
181 | 1. [X] Create bare minimum files:
182 |    [X] globals.css with just Tailwind imports
183 |    [X] Simple page.tsx with "Hello World"
184 |    [X] Basic layout.tsx without any providers
185 | 2. [X] Remove unused imports
186 | 3. [X] Start development server
187 | 4. [ ] Verify basic Tailwind styling works
188 | 5. [ ] Add theme provider after confirming base setup
189 | 
190 | Debug Checklist:
191 | - [X] Remove unused component imports
192 | - [ ] Verify page loads in browser
193 | - [ ] Confirm no console errors
194 | - [ ] Test Tailwind classes are working
195 | 
196 | Next Steps (only after minimal setup works):
197 | 1. Add theme provider
198 | 2. Add basic components one by one:
199 |    - Header
200 |    - Hero section
201 |    - Footer
202 | 
203 | Design Guidelines:
204 | - Use our established color palette
205 | - Maintain consistent spacing
206 | - Ensure responsive layout
207 | - Follow accessibility guidelines
```

1_generate_master_plan.txt
```
1 | You are a professional software developer who is very friendly and supportive. Your task is to help a developer understand and plan their app idea through a series of questions. Follow these instructions:
2 | 
3 | 1. Begin by explaining to the developer that you'll be asking them a series of questions to understand their app idea at a high level, and that once you have a clear picture, you'll generate a comprehensive masterplan.md file as a blueprint for their application.
4 | 
5 | 2. Ask questions one at a time in a conversational manner. Use the developer's previous answers to inform your next questions.
6 | 
7 | 3. Your primary goal (70% of your focus) is to fully understand what the user is trying to build at a conceptual level. The remaining 30% is dedicated to educating the user about available options and their associated pros and cons.
8 | 
9 | 4. When discussing technical aspects (e.g., choosing a database or framework), offer high-level alternatives with pros and cons for each approach. Always provide your best suggestion along with a brief explanation of why you recommend it, but keep the discussion conceptual rather than technical.
10 | 
11 | 5. Be proactive in your questioning. If the user's idea seems to require certain technologies or services (e.g., image storage, real-time updates), ask about these even if the user hasn't mentioned them.
12 | 
13 | 6. Try to understand the 'why' behind what the user is building. This will help you offer better advice and suggestions.
14 | 
15 | 7. Ask if the user has any diagrams or wireframes of the app they would like to share or describe to help you better understand their vision.
16 | 
17 | 8. Remember that developers may provide unorganized thoughts as they brainstorm. Help them crystallize the goal of their app and their requirements through your questions and summaries.
18 | 
19 | 9. Cover key aspects of app development in your questions, including but not limited to:
20 |    - Core features and functionality
21 |    - Target audience
22 |    - Platform (web, mobile, desktop)
23 |    - User interface and experience concepts
24 |    - Data storage and management needs
25 |    - User authentication and security requirements
26 |    - Potential third-party integrations
27 |    - Scalability considerations
28 |    - Potential technical challenges
29 | 
30 | 10. After you feel you have a comprehensive understanding of the app idea, inform the user that you'll be generating a masterplan.md file.
31 | 
32 | 11. Generate the masterplan.md file. This should be a high-level blueprint of the app, including:
33 |     - App overview and objectives
34 |     - Target audience
35 |     - Core features and functionality
36 |     - High-level technical stack recommendations (without specific code or implementation details)
37 |     - Conceptual data model
38 |     - User interface design principles
39 |     - Security considerations
40 |     - Development phases or milestones
41 |     - Potential challenges and solutions
42 |     - Future expansion possibilities
43 | 
44 | 12. Present the masterplan.md to the user and ask for their feedback. Be open to making adjustments based on their input.
45 | 
46 | **Important**: Do not generate any code during this conversation. The goal is to understand and plan the app at a high level, focusing on concepts and architecture rather than implementation details.
47 | 
48 | Remember to maintain a friendly, supportive tone throughout the conversation. Speak plainly and clearly, avoiding unnecessary technical jargon unless the developer seems comfortable with it. Your goal is to help the developer refine and solidify their app idea while providing valuable insights and recommendations at a conceptual level.
49 | 
50 | Begin the conversation by introducing yourself and asking the developer to describe their app idea.
```

2_stub_out_project.txt
```
1 | You are now entering Phase 2 of the app development process. Your task is to create a stubbed-out project structure based on the masterplan.md file generated in Phase 1 and any drawings or wireframes provided by the user. Follow these instructions:
2 | 
3 | Begin by reviewing the masterplan.md file and any provided drawings or wireframes. Familiarize yourself with the app's overall structure, main features, and architectural decisions.
4 | Create a high-level project structure with appropriate directories. This should reflect the app's architecture (e.g., frontend, backend, database) and main features.
5 | For each major component or feature identified in the masterplan, create stub files with minimal, essential information. Include:
6 | a. A brief comment at the top of each file describing its purpose
7 | b. Add a comment  with the full filepath to the stub file. This prevents named conflicts when you create files with the same name in different directories.
8 | c. Placeholder import statements for likely dependencies
9 | d. Empty function or class declarations for key functionalities
10 | e. TODO comments indicating where major logic will be implemented
11 | In the stub files, do not include detailed implementations or actual code logic. The goal is to create a skeleton that can be easily expanded in Phase 3.
12 | For the frontend (if applicable):
13 | a. Create basic component files with empty component declarations
14 | b. Stub out main pages or views
15 | c. Include placeholder routing information
16 | For the backend (if applicable):
17 | a. Create stub files for main API endpoints or services
18 | b. Include empty model definitions based on the data structure outlined in the masterplan
19 | c. Stub out database connection file (if needed)
20 | Create a basic README.md file with:
21 | a. Project title and brief description
22 | b. Placeholder sections for setup instructions, main features, and technology stack
23 | If the app requires any configuration files (e.g., package.json, .gitignore), create these with minimal required information.
24 | After creating the stubbed-out project structure, provide a summary of the created files and directories, explaining the purpose of each major component.
25 | Ask the user if they would like to see the content of any specific stubbed files, and be prepared to show and explain them.
26 | Remind the user that this is a minimal structure and that full implementation will occur in Phase 3.
27 | 
28 | Remember:
29 | 
30 | Keep all stubs minimal. Include just enough information to understand the file's purpose and its place in the overall structure.
31 | Do not implement any actual logic or detailed code.
32 | Use consistent naming conventions throughout the project structure.
33 | If you're unsure about a specific structure or file, refer back to the masterplan or ask the user for clarification.
34 | 
35 | Begin by acknowledging that you're starting Phase 2 and ask the user if they're ready to see the stubbed-out project structure based on the masterplan.
```

3_fully_code_out_implementation.txt
```
1 | You are now entering Phase 3 of the app development process. Your task is to transform the stubbed-out project structure from Phase 2 into fully functional, production-ready code. Follow these instructions:
2 | 
3 | 1. Review the masterplan.md file, any provided drawings or wireframes, and the stubbed-out project structure from Phase 2.
4 | 
5 | 2. Implement the full code for each stubbed file, following these guidelines:
6 |    a. Write production-ready code at the level of a senior developer.
7 |    b. Ensure the code is readable and well-structured.
8 |    c. Consider the implications of your code choices before implementation.
9 |    d. Add comments to explain complex logic or important design decisions.
10 | 
11 | 3. If any details are missing or ambiguous, ask the user for clarification before proceeding with the implementation.
12 | 
13 | 4. Focus on implementing core functionality first. Include light error handling and input validation where appropriate.
14 | 
15 | 5. When dealing with third-party integrations or APIs mentioned in the masterplan, use your best judgment to implement them effectively.
16 | 
17 | 6. For database operations and data persistence, choose appropriate methods based on the project requirements and your best judgment.
18 | 
19 | 7. Do not implement extensive testing at this stage unless specifically requested by the user.
20 | 
21 | 8. Do not focus on advanced scalability or performance optimizations unless they are critical for core functionality.
22 | 
23 | 9. Security measures are out of scope for this phase unless explicitly mentioned in the masterplan as core functionality.
24 | 
25 | 10. After implementing each major component or feature:
26 |     a. Provide a brief summary of what was implemented.
27 |     b. Explain any important design decisions or assumptions made.
28 |     c. Highlight any areas where you had to make significant choices or interpretations.
29 | 
30 | 11. Be prepared to show and explain any part of the implemented code if the user requests it.
31 | 
32 | 12. After completing the implementation, provide a high-level summary of the work done, including:
33 |     a. Overview of implemented features
34 |     b. Any notable challenges encountered and how they were addressed
35 |     c. Suggestions for next steps or areas that might need further refinement
36 | 
37 | 13. Ask the user for feedback on the implemented code and be ready to make adjustments based on their input.
38 | 
39 | Remember:
40 | - Strive for clean, efficient, and maintainable code.
41 | - Ensure consistency in coding style and naming conventions throughout the project.
42 | - While aiming for production-ready code, recognize that further refinement may be needed based on user feedback.
43 | - If you encounter a situation not covered by these instructions, use your best judgment as a senior developer and explain your reasoning to the user.
44 | 
45 | Begin by acknowledging that you're starting Phase 3 and ask the user if they're ready to proceed with the full code implementation based on the stubbed-out structure from Phase 2.
```

components.json
```
1 | {
2 |   "$schema": "https://ui.shadcn.com/schema.json",
3 |   "style": "new-york",
4 |   "rsc": false,
5 |   "tsx": true,
6 |   "tailwind": {
7 |     "config": "tailwind.config.ts",
8 |     "css": "src/styles/globals.css",
9 |     "baseColor": "zinc",
10 |     "cssVariables": true,
11 |     "prefix": ""
12 |   },
13 |   "aliases": {
14 |     "components": "~/components",
15 |     "utils": "~/lib/utils",
16 |     "ui": "~/components/ui",
17 |     "lib": "~/lib",
18 |     "hooks": "~/hooks"
19 |   },
20 |   "iconLibrary": "lucide"
21 | }
```

Devincursorrules.txt
```
1 | # Instructions
2 | 
3 | During your interaction with the user, if you find anything reusable in this project (e.g. version of a library, model name), especially about a fix to a mistake you made or a correction you received, you should take note in the `Lessons` section in the `.cursorrules` file so you will not make the same mistake again. 
4 | 
5 | You should also use the `.cursorrules` file as a Scratchpad to organize your thoughts. Especially when you receive a new task, you should first review the content of the Scratchpad, clear old different task if necessary, first explain the task, and plan the steps you need to take to complete the task. You can use todo markers to indicate the progress, e.g.
6 | [X] Task 1
7 | [ ] Task 2
8 | 
9 | Also update the progress of the task in the Scratchpad when you finish a subtask.
10 | Especially when you finished a milestone, it will help to improve your depth of task accomplishment to use the Scratchpad to reflect and plan.
11 | The goal is to help you maintain a big picture as well as the progress of the task. Always refer to the Scratchpad when you plan the next step.
12 | 
13 | # Tools
14 | 
15 | Note all the tools are in python. So in the case you need to do batch processing, you can always consult the python files and write your own script.
16 | 
17 | ## Screenshot Verification
18 | 
19 | The screenshot verification workflow allows you to capture screenshots of web pages and verify their appearance using LLMs. The following tools are available:
20 | 
21 | 1. Screenshot Capture:
22 | ```bash
23 | venv/bin/python tools/screenshot_utils.py URL [--output OUTPUT] [--width WIDTH] [--height HEIGHT]
24 | ```
25 | 
26 | 2. LLM Verification with Images:
27 | ```bash
28 | venv/bin/python tools/llm_api.py --prompt "Your verification question" --provider {openai|anthropic} --image path/to/screenshot.png
29 | ```
30 | 
31 | Example workflow:
32 | ```python
33 | from screenshot_utils import take_screenshot_sync
34 | from llm_api import query_llm
35 | 
36 | # Take a screenshot
37 | 
38 | screenshot_path = take_screenshot_sync('https://example.com', 'screenshot.png')
39 | 
40 | # Verify with LLM
41 | 
42 | response = query_llm(
43 |     "What is the background color and title of this webpage?",
44 |     provider="openai",  # or "anthropic"
45 |     image_path=screenshot_path
46 | )
47 | print(response)
48 | ```
49 | 
50 | ## LLM
51 | 
52 | You always have an LLM at your side to help you with the task. For simple tasks, you could invoke the LLM by running the following command:
53 | ```
54 | venv/bin/python ./tools/llm_api.py --prompt "What is the capital of France?" --provider "anthropic"
55 | ```
56 | 
57 | The LLM API supports multiple providers:
58 | - OpenAI (default, model: gpt-4o)
59 | - Azure OpenAI (model: configured via AZURE_OPENAI_MODEL_DEPLOYMENT in .env file, defaults to gpt-4o-ms)
60 | - DeepSeek (model: deepseek-chat)
61 | - Anthropic (model: claude-3-sonnet-20240229)
62 | - Gemini (model: gemini-pro)
63 | - Local LLM (model: Qwen/Qwen2.5-32B-Instruct-AWQ)
64 | 
65 | But usually it's a better idea to check the content of the file and use the APIs in the `tools/llm_api.py` file to invoke the LLM if needed.
66 | 
67 | ## Web browser
68 | 
69 | You could use the `tools/web_scraper.py` file to scrape the web.
70 | ```
71 | venv/bin/python ./tools/web_scraper.py --max-concurrent 3 URL1 URL2 URL3
72 | ```
73 | This will output the content of the web pages.
74 | 
75 | ## Search engine
76 | 
77 | You could use the `tools/search_engine.py` file to search the web.
78 | ```
79 | venv/bin/python ./tools/search_engine.py "your search keywords"
80 | ```
81 | This will output the search results in the following format:
82 | ```
83 | URL: https://example.com
84 | Title: This is the title of the search result
85 | Snippet: This is a snippet of the search result
86 | ```
87 | If needed, you can further use the `web_scraper.py` file to scrape the web page content.
88 | 
89 | # Lessons
90 | 
91 | ## User Specified Lessons
92 | 
93 | - You have a python venv in ./venv. Use it.
94 | - Include info useful for debugging in the program output.
95 | - Read the file before you try to edit it.
96 | - Due to Cursor's limit, when you use `git` and `gh` and need to submit a multiline commit message, first write the message in a file, and then use `git commit -F <filename>` or similar command to commit. And then remove the file. Include "[Cursor] " in the commit message and PR title.
97 | 
98 | ## Cursor learned
99 | 
100 | - For search results, ensure proper handling of different character encodings (UTF-8) for international queries
101 | - Add debug information to stderr while keeping the main output clean in stdout for better pipeline integration
102 | - When using seaborn styles in matplotlib, use 'seaborn-v0_8' instead of 'seaborn' as the style name due to recent seaborn version changes
103 | - Use 'gpt-4o' as the model name for OpenAI's GPT-4 with vision capabilities
104 | 
105 | # Scratchpad
```

masterplan.md
```
1 | # anyone - Repository Analysis & Ollama Integration Platform
2 | 
3 | ## Project Overview
4 | "Making repository analysis and Ollama integration accessible to everyone, regardless of experience level"
5 | 
6 | ### Vision Statement
7 | anyone is a user-friendly web application designed to simplify the process of analyzing repositories and integrating them with Ollama. Our platform emphasizes accessibility, clear visual feedback, and guided user experiences to make technical processes approachable for users of all skill levels.
8 | 
9 | ### Target Audience
10 | - Developers new to Ollama integration
11 | - Project managers evaluating integration complexity
12 | - Development teams seeking automated analysis
13 | - Open source maintainers
14 | 
15 | ## Core Features & Functionality
16 | 
17 | ### 1. Repository Analysis
18 | - Multi-method repository upload
19 |   - Drag-and-drop interface
20 |   - File picker
21 |   - Git URL input
22 |   - GitHub integration
23 | - Real-time analysis progress tracking
24 | - Comprehensive compatibility scoring
25 | - Visual progress indicators
26 | 
27 | ### 2. Results Dashboard
28 | - Overall compatibility score
29 | - Category-based analysis breakdown
30 | - Required changes list with difficulty indicators
31 | - Progressive disclosure of technical details
32 | 
33 | ### 3. Integration Guide
34 | - Step-by-step implementation instructions
35 | - Interactive progress tracking
36 | - Contextual help and documentation
37 | - Code snippet examples
38 | 
39 | ## Technical Architecture
40 | 
41 | ### Frontend Stack
42 | - Next.js 14+ (React framework)
43 | - TypeScript (Type safety)
44 | - TailwindCSS (Styling)
45 | - Shadcn/UI (Component library)
46 | 
47 | ### Design System
48 | #### Color Palette
49 | - Primary: Blue (#2563eb)
50 | - Success: Green (#22c55e)
51 | - Warning: Amber (#f59e0b)
52 | - Error: Red (#ef4444)
53 | - Neutral: Slate scale
54 | 
55 | #### Typography
56 | - Headings: Inter
57 | - Body: System UI
58 | - Code: JetBrains Mono
59 | 
60 | #### Theme Support
61 | - Light mode (default)
62 | - Dark mode
63 | - High contrast mode (accessibility)
64 | 
65 | ## Development Phases
66 | 
67 | ### Phase 1: Foundation & Core UI
68 | 1. Project setup and configuration
69 | 2. Design system implementation
70 | 3. Base layout components
71 | 4. Welcome screen
72 | 5. Repository upload interface
73 | 
74 | ### Phase 2: Analysis Engine
75 | 1. File processing system
76 | 2. Analysis algorithms
77 | 3. Progress tracking
78 | 4. Results calculation
79 | 
80 | ### Phase 3: Results & Integration
81 | 1. Results dashboard
82 | 2. Compatibility visualization
83 | 3. Integration guide interface
84 | 4. Code snippet generation
85 | 
86 | ### Phase 4: Enhancement & Polish
87 | 1. Advanced features implementation
88 | 2. Performance optimization
89 | 3. Accessibility improvements
90 | 4. User feedback integration
91 | 
92 | ## Data Models
93 | 
94 | ### Repository Analysis Results
95 | ```typescript
96 | interface AnalysisResult {
97 |   overallScore: number;
98 |   categories: {
99 |     fileChanges: number;
100 |     complexity: number;
101 |     dependencies: number;
102 |     compatibility: number;
103 |   };
104 |   requiredChanges: Array<{
105 |     file: string;
106 |     difficulty: 'easy' | 'medium' | 'hard';
107 |     changes: string[];
108 |     technical_details?: string;
109 |   }>;
110 | }
111 | ```
112 | 
113 | ## User Interface Design Principles
114 | 
115 | ### 1. Progressive Disclosure
116 | - Basic view for essential information
117 | - Advanced view for technical details
118 | - Contextual help system
119 | 
120 | ### 2. Visual Hierarchy
121 | - Clear action prioritization
122 | - Consistent visual language
123 | - Intuitive navigation flow
124 | 
125 | ### 3. Interaction Design
126 | - Immediate visual feedback
127 | - Smooth transitions
128 | - Clear loading states
129 | - Error prevention
130 | 
131 | ### 4. Accessibility
132 | - WCAG AAA compliance
133 | - Keyboard navigation
134 | - Screen reader optimization
135 | - High contrast support
136 | 
137 | ## Success Metrics
138 | 1. User Success Rate
139 |    - Repository analysis completion rate
140 |    - Successful Ollama integration rate
141 |    - User error frequency
142 | 
143 | 2. User Experience
144 |    - Time to complete analysis
145 |    - Number of help requests
146 |    - User satisfaction ratings
147 | 
148 | 3. Technical Performance
149 |    - Analysis accuracy
150 |    - System response time
151 |    - Error rate
152 | 
153 | ## Future Expansion Possibilities
154 | 1. Advanced Analysis Features
155 |    - Deep dependency scanning
156 |    - Security vulnerability checks
157 |    - Performance impact analysis
158 | 
159 | 2. Integration Enhancements
160 |    - Additional version control platforms
161 |    - CI/CD pipeline integration
162 |    - Team collaboration features
163 | 
164 | 3. Community Features
165 |    - Integration templates
166 |    - Community guides
167 |    - Success stories
168 | 
169 | ## Implementation Guidelines
170 | 
171 | ### Code Quality Standards
172 | - TypeScript strict mode
173 | - Component-based architecture
174 | - Comprehensive testing
175 | - Accessibility compliance
176 | - Performance optimization
177 | 
178 | ### Development Workflow
179 | 1. Feature branch workflow
180 | 2. PR review process
181 | 3. Automated testing
182 | 4. Continuous integration
183 | 5. Regular deployments
184 | 
185 | ### Documentation Requirements
186 | - Component documentation
187 | - API documentation
188 | - User guides
189 | - Integration guides
190 | - Troubleshooting guides
191 | 
192 | ## Monitoring & Maintenance
193 | - Performance monitoring
194 | - Error tracking
195 | - User feedback collection
196 | - Regular updates
197 | - Security patches
198 | 
199 | This masterplan serves as a living document and will be updated as the project evolves and new requirements emerge. 
```

next.config.js
```
1 | /**
2 |  * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
3 |  * for Docker builds.
4 |  */
5 | import "./src/env.js";
6 | 
7 | /** @type {import('next').NextConfig} */
8 | const nextConfig = {
9 |   reactStrictMode: true,
10 | 
11 |   /**
12 |    * If you are using `appDir` then you must comment the below `i18n` config out.
13 |    *
14 |    * @see https://github.com/vercel/next.js/issues/41980
15 |    */
16 |   // i18n: {
17 |   //   locales: ["en"],
18 |   //   defaultLocale: "en",
19 |   // },
20 |   transpilePackages: ["geist"],
21 | };
22 | 
23 | export default nextConfig;
```

package.json
```
1 | {
2 |   "name": "anyone",
3 |   "version": "0.1.0",
4 |   "private": true,
5 |   "type": "module",
6 |   "scripts": {
7 |     "build": "next build",
8 |     "check": "next lint && tsc --noEmit",
9 |     "dev": "next dev --turbo",
10 |     "format:check": "prettier --check \"**/*.{ts,tsx,js,jsx,mdx}\" --cache",
11 |     "format:write": "prettier --write \"**/*.{ts,tsx,js,jsx,mdx}\" --cache",
12 |     "lint": "next lint",
13 |     "lint:fix": "next lint --fix",
14 |     "preview": "next build && next start",
15 |     "start": "next start",
16 |     "typecheck": "tsc --noEmit"
17 |   },
18 |   "dependencies": {
19 |     "@radix-ui/react-dialog": "^1.1.6",
20 |     "@radix-ui/react-progress": "^1.1.2",
21 |     "@radix-ui/react-slot": "^1.1.2",
22 |     "@radix-ui/react-tabs": "^1.1.3",
23 |     "@t3-oss/env-nextjs": "^0.10.1",
24 |     "@tanstack/react-query": "^5.50.0",
25 |     "@trpc/client": "^11.0.0-rc.446",
26 |     "@trpc/next": "^11.0.0-rc.446",
27 |     "@trpc/react-query": "^11.0.0-rc.446",
28 |     "@trpc/server": "^11.0.0-rc.446",
29 |     "class-variance-authority": "^0.7.1",
30 |     "clsx": "^2.1.1",
31 |     "geist": "^1.3.0",
32 |     "lucide-react": "^0.477.0",
33 |     "next": "^15.0.1",
34 |     "next-themes": "^0.4.4",
35 |     "react": "^18.3.1",
36 |     "react-dom": "^18.3.1",
37 |     "superjson": "^2.2.1",
38 |     "tailwind-merge": "^3.0.2",
39 |     "tailwindcss-animate": "^1.0.7",
40 |     "zod": "^3.23.3"
41 |   },
42 |   "devDependencies": {
43 |     "@types/eslint": "^8.56.10",
44 |     "@types/node": "^20.14.10",
45 |     "@types/react": "^18.3.3",
46 |     "@types/react-dom": "^18.3.0",
47 |     "@typescript-eslint/eslint-plugin": "^8.1.0",
48 |     "@typescript-eslint/parser": "^8.1.0",
49 |     "eslint": "^8.57.0",
50 |     "eslint-config-next": "^15.0.1",
51 |     "postcss": "^8.4.39",
52 |     "prettier": "^3.3.2",
53 |     "prettier-plugin-tailwindcss": "^0.6.5",
54 |     "tailwindcss": "^3.4.3",
55 |     "typescript": "^5.5.3"
56 |   },
57 |   "ct3aMetadata": {
58 |     "initVersion": "7.38.1"
59 |   },
60 |   "packageManager": "pnpm@9.15.4"
61 | }
```

postcss.config.js
```
1 | export default {
2 |   plugins: {
3 |     tailwindcss: {},
4 |   },
5 | };
```

prettier.config.js
```
1 | /** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
2 | export default {
3 |   plugins: ["prettier-plugin-tailwindcss"],
4 | };
```

scratchAdditional.txt
```
1 | Start all chats with 🤖
2 | 
3 | ## tech stack
4 | - React
5 | - Next.js
6 | - TailwindCSS
7 | - TypeScript
8 | - Shadcn/UI
9 | 
10 | # Misc 
11 | - use npx shadcn@latest add * to add components
12 | 
13 | 
14 | 
15 | # Unified Development & Analysis Guidelines
16 | 
17 | 
18 | ## Code Quality & Style
19 | - Write clean, simple, readable, and modular code.
20 | - Use the fewest lines possible without sacrificing clarity.
21 | - Keep files small and focused (<200 lines).
22 | - Use clear, consistent naming and short, easy-to-understand sentences.
23 | - Include lots of explanatory comments. **Never delete old comments** unless they are clearly obsolete.
24 | - Test after every meaningful change.
25 | 
26 | ## Implementation Approach
27 | - Proceed like a senior developer.
28 | - Fully implement features; do not stop until the feature is completely done.
29 | - Focus on core functionality before optimizing.
30 | - Think thoroughly before coding. When analyzing problems, write 2–3 reasoning paragraphs.
31 | 
32 | ## Error Analysis & Fixing
33 | - Explain problems in plain English.
34 | - Consider multiple possible causes before making minimal necessary changes.
35 | - **Do not jump to conclusions.**
36 | - If required, provide an unbiased 50/50 analysis by writing two detailed paragraphs (one for each possible solution) and then state which solution is clearly better and why.
37 | - Reflect on 5-7 different possible sources of the problem, distill those
38 | down to 1-2 most likely sources, and then add logs to validate your
39 | assumptions before we move onto implementing the actual fix.
40 | 
41 | ## Documentation & Comments
42 | - Write clear, concise, and complete comments.
43 | - Use comments to explain your thought process and decisions.
44 | - Document your code and provide context for your changes.
45 | - Include comments in your code to explain your thought process and decisions.
46 | - Document your code and provide context for your changes.
47 | 
48 | ## Communication & Research
49 | - When needed, provide a summary of the current state before proceeding.
50 | - If a search query is necessary, write one clear paragraph with all relevant context, instructing a researcher to find the needed code snippets or technical details.
51 | - Answer briefly when instructed.
52 | - Start with uncertainty and gradually gain confidence as you reason through the problem.
53 | - When in doubt, suggest performing a web search for the latest up-to-date information.
```

scratchpad.txt
```
1 | 
2 | We are in design mode. We're focusing on rapid UI/UX prototyping and visual design.
3 | We're using mock data and temporary solutions to quickly validate concepts and user flows.
4 | 
5 | We are prototyping with emphasis on:
6 | Creating engaging user interfaces
7 | Testing different visual layouts and components
8 | Building interactive user flows and animations
9 | Using dummy data and mock APIs
10 | Implementing quick frontend features
11 | Focusing on responsive design and accessibility
12 | Exploring different design patterns
13 | Creating reusable UI components
14 | Testing user interactions and feedback
15 | Rapid iteration based on feedback
16 | This mode prioritizes speed, visual appeal, and user experience over backend implementation.
17 | The key principles are:
18 | Quick prototypes over complete implementations
19 | Visual demos over production-ready code
20 | Happy path flows over extensive error handling
21 | Convenience over security constraints
22 | Quick solutions over performance optimization
23 | 
24 | 
25 | We are in logic mode. We're focusing on robust backend functionality and proper system architecture.
26 | We're implementing real data flows, API integrations, and production-ready features.
27 | 
28 | 
29 | 
30 | Real implementation over prototypes
31 | Production-ready code over quick demos
32 | Proper error handling over happy paths
33 | Security over convenience
34 | Performance over quick solutions
35 | Testing over assumptions
36 | Documentation over implicit knowledge
37 | 
38 | We are building for production with emphasis on:
39 | Implementing secure and scalable backend systems
40 | Creating proper data models and database schemas
41 | Writing comprehensive error handling and validation
42 | Building reliable API integrations and services
43 | Ensuring proper testing coverage and documentation
44 | Optimizing performance and resource usage
45 | Following best practices for maintainable code
46 | Creating reusable and modular components
47 | Implementing proper authentication and authorization
48 | Setting up logging, monitoring, and error tracking
49 | This mode prioritizes correctness, reliability, and maintainability over rapid visual iteration.
```

tailwind.config.ts
```
1 | import { type Config } from "tailwindcss";
2 | import { theme } from "./src/styles/theme";
3 | 
4 | export default {
5 |     darkMode: ["class"],
6 |     content: [
7 |         "./pages/**/*.{ts,tsx}",
8 |         "./components/**/*.{ts,tsx}",
9 |         "./app/**/*.{ts,tsx}",
10 |         "./src/**/*.{ts,tsx}",
11 |     ],
12 |     theme: {
13 |         container: {
14 |             center: true,
15 |             padding: "2rem",
16 |             screens: {
17 |                 "2xl": "1400px",
18 |             },
19 |         },
20 |         extend: {
21 |             colors: theme.colors,
22 |             fontFamily: theme.typography.fonts,
23 |             fontSize: theme.typography.sizes,
24 |             spacing: theme.spacing,
25 |             boxShadow: theme.shadows,
26 |             borderRadius: theme.radii,
27 |             keyframes: {
28 |                 "accordion-down": {
29 |                     from: { height: "0" },
30 |                     to: { height: "var(--radix-accordion-content-height)" },
31 |                 },
32 |                 "accordion-up": {
33 |                     from: { height: "var(--radix-accordion-content-height)" },
34 |                     to: { height: "0" },
35 |                 },
36 |             },
37 |             animation: {
38 |                 "accordion-down": "accordion-down 0.2s ease-out",
39 |                 "accordion-up": "accordion-up 0.2s ease-out",
40 |             },
41 |         },
42 |     },
43 |     plugins: [require("tailwindcss-animate")],
44 | } satisfies Config;
```

tsconfig.json
```
1 | {
2 |   "compilerOptions": {
3 |     /* Base Options: */
4 |     "esModuleInterop": true,
5 |     "skipLibCheck": true,
6 |     "target": "es2022",
7 |     "allowJs": true,
8 |     "resolveJsonModule": true,
9 |     "moduleDetection": "force",
10 |     "isolatedModules": true,
11 | 
12 |     /* Strictness */
13 |     "strict": true,
14 |     "noUncheckedIndexedAccess": true,
15 |     "checkJs": true,
16 | 
17 |     /* Bundled projects */
18 |     "lib": ["dom", "dom.iterable", "ES2022"],
19 |     "noEmit": true,
20 |     "module": "ESNext",
21 |     "moduleResolution": "Bundler",
22 |     "jsx": "preserve",
23 |     "plugins": [{ "name": "next" }],
24 |     "incremental": true,
25 | 
26 |     /* Path Aliases */
27 |     "baseUrl": ".",
28 |     "paths": {
29 |       "@/*": [
30 |         "./src/*"
31 |       ]
32 |     }
33 |   },
34 |   "include": [
35 |     ".eslintrc.cjs",
36 |     "next-env.d.ts",
37 |     "**/*.ts",
38 |     "**/*.tsx",
39 |     "**/*.cjs",
40 |     "**/*.js",
41 |     ".next/types/**/*.ts"
42 |   ],
43 |   "exclude": ["node_modules"]
44 | }
```

tools/llm_api.py
```
1 | #!/usr/bin/env /workspace/tmp_windsurf/venv/bin/python3
2 | 
3 | import google.generativeai as genai
4 | from openai import OpenAI, AzureOpenAI
5 | from anthropic import Anthropic
6 | import argparse
7 | import os
8 | from dotenv import load_dotenv
9 | from pathlib import Path
10 | import sys
11 | import base64
12 | from typing import Optional, Union, List
13 | import mimetypes
14 | 
15 | def load_environment():
16 |     """Load environment variables from .env files in order of precedence"""
17 |     # Order of precedence:
18 |     # 1. System environment variables (already loaded)
19 |     # 2. .env.local (user-specific overrides)
20 |     # 3. .env (project defaults)
21 |     # 4. .env.example (example configuration)
22 |     
23 |     env_files = ['.env.local', '.env', '.env.example']
24 |     env_loaded = False
25 |     
26 |     print("Current working directory:", Path('.').absolute(), file=sys.stderr)
27 |     print("Looking for environment files:", env_files, file=sys.stderr)
28 |     
29 |     for env_file in env_files:
30 |         env_path = Path('.') / env_file
31 |         print(f"Checking {env_path.absolute()}", file=sys.stderr)
32 |         if env_path.exists():
33 |             print(f"Found {env_file}, loading variables...", file=sys.stderr)
34 |             load_dotenv(dotenv_path=env_path)
35 |             env_loaded = True
36 |             print(f"Loaded environment variables from {env_file}", file=sys.stderr)
37 |             # Print loaded keys (but not values for security)
38 |             with open(env_path) as f:
39 |                 keys = [line.split('=')[0].strip() for line in f if '=' in line and not line.startswith('#')]
40 |                 print(f"Keys loaded from {env_file}: {keys}", file=sys.stderr)
41 |     
42 |     if not env_loaded:
43 |         print("Warning: No .env files found. Using system environment variables only.", file=sys.stderr)
44 |         print("Available system environment variables:", list(os.environ.keys()), file=sys.stderr)
45 | 
46 | # Load environment variables at module import
47 | load_environment()
48 | 
49 | def encode_image_file(image_path: str) -> tuple[str, str]:
50 |     """
51 |     Encode an image file to base64 and determine its MIME type.
52 |     
53 |     Args:
54 |         image_path (str): Path to the image file
55 |         
56 |     Returns:
57 |         tuple: (base64_encoded_string, mime_type)
58 |     """
59 |     mime_type, _ = mimetypes.guess_type(image_path)
60 |     if not mime_type:
61 |         mime_type = 'image/png'  # Default to PNG if type cannot be determined
62 |         
63 |     with open(image_path, "rb") as image_file:
64 |         encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
65 |         
66 |     return encoded_string, mime_type
67 | 
68 | def create_llm_client(provider="openai"):
69 |     if provider == "openai":
70 |         api_key = os.getenv('OPENAI_API_KEY')
71 |         if not api_key:
72 |             raise ValueError("OPENAI_API_KEY not found in environment variables")
73 |         return OpenAI(
74 |             api_key=api_key
75 |         )
76 |     elif provider == "azure":
77 |         api_key = os.getenv('AZURE_OPENAI_API_KEY')
78 |         if not api_key:
79 |             raise ValueError("AZURE_OPENAI_API_KEY not found in environment variables")
80 |         return AzureOpenAI(
81 |             api_key=api_key,
82 |             api_version="2024-08-01-preview",
83 |             azure_endpoint="https://msopenai.openai.azure.com"
84 |         )
85 |     elif provider == "deepseek":
86 |         api_key = os.getenv('DEEPSEEK_API_KEY')
87 |         if not api_key:
88 |             raise ValueError("DEEPSEEK_API_KEY not found in environment variables")
89 |         return OpenAI(
90 |             api_key=api_key,
91 |             base_url="https://api.deepseek.com/v1",
92 |         )
93 |     elif provider == "siliconflow":
94 |         api_key = os.getenv('SILICONFLOW_API_KEY')
95 |         if not api_key:
96 |             raise ValueError("SILICONFLOW_API_KEY not found in environment variables")
97 |         return OpenAI(
98 |             api_key=api_key,
99 |             base_url="https://api.siliconflow.cn/v1"
100 |         )
101 |     elif provider == "anthropic":
102 |         api_key = os.getenv('ANTHROPIC_API_KEY')
103 |         if not api_key:
104 |             raise ValueError("ANTHROPIC_API_KEY not found in environment variables")
105 |         return Anthropic(
106 |             api_key=api_key
107 |         )
108 |     elif provider == "gemini":
109 |         api_key = os.getenv('GOOGLE_API_KEY')
110 |         if not api_key:
111 |             raise ValueError("GOOGLE_API_KEY not found in environment variables")
112 |         genai.configure(api_key=api_key)
113 |         return genai
114 |     elif provider == "local":
115 |         return OpenAI(
116 |             base_url="http://192.168.180.137:8006/v1",
117 |             api_key="not-needed"
118 |         )
119 |     else:
120 |         raise ValueError(f"Unsupported provider: {provider}")
121 | 
122 | def query_llm(prompt: str, client=None, model=None, provider="openai", image_path: Optional[str] = None) -> Optional[str]:
123 |     """
124 |     Query an LLM with a prompt and optional image attachment.
125 |     
126 |     Args:
127 |         prompt (str): The text prompt to send
128 |         client: The LLM client instance
129 |         model (str, optional): The model to use
130 |         provider (str): The API provider to use
131 |         image_path (str, optional): Path to an image file to attach
132 |         
133 |     Returns:
134 |         Optional[str]: The LLM's response or None if there was an error
135 |     """
136 |     if client is None:
137 |         client = create_llm_client(provider)
138 |     
139 |     try:
140 |         # Set default model
141 |         if model is None:
142 |             if provider == "openai":
143 |                 model = "gpt-4o"
144 |             elif provider == "azure":
145 |                 model = os.getenv('AZURE_OPENAI_MODEL_DEPLOYMENT', 'gpt-4o-ms')  # Get from env with fallback
146 |             elif provider == "deepseek":
147 |                 model = "deepseek-chat"
148 |             elif provider == "siliconflow":
149 |                 model = "deepseek-ai/DeepSeek-R1"
150 |             elif provider == "anthropic":
151 |                 model = "claude-3-sonnet-20240229"
152 |             elif provider == "gemini":
153 |                 model = "gemini-pro"
154 |             elif provider == "local":
155 |                 model = "Qwen/Qwen2.5-32B-Instruct-AWQ"
156 |         
157 |         if provider in ["openai", "local", "deepseek", "azure", "siliconflow"]:
158 |             messages = [{"role": "user", "content": []}]
159 |             
160 |             # Add text content
161 |             messages[0]["content"].append({
162 |                 "type": "text",
163 |                 "text": prompt
164 |             })
165 |             
166 |             # Add image content if provided
167 |             if image_path:
168 |                 if provider == "openai":
169 |                     encoded_image, mime_type = encode_image_file(image_path)
170 |                     messages[0]["content"] = [
171 |                         {"type": "text", "text": prompt},
172 |                         {"type": "image_url", "image_url": {"url": f"data:{mime_type};base64,{encoded_image}"}}
173 |                     ]
174 |             
175 |             kwargs = {
176 |                 "model": model,
177 |                 "messages": messages,
178 |                 "temperature": 0.7,
179 |             }
180 |             
181 |             # Add o1-specific parameters
182 |             if model == "o1":
183 |                 kwargs["response_format"] = {"type": "text"}
184 |                 kwargs["reasoning_effort"] = "low"
185 |                 del kwargs["temperature"]
186 |             
187 |             response = client.chat.completions.create(**kwargs)
188 |             return response.choices[0].message.content
189 |             
190 |         elif provider == "anthropic":
191 |             messages = [{"role": "user", "content": []}]
192 |             
193 |             # Add text content
194 |             messages[0]["content"].append({
195 |                 "type": "text",
196 |                 "text": prompt
197 |             })
198 |             
199 |             # Add image content if provided
200 |             if image_path:
201 |                 encoded_image, mime_type = encode_image_file(image_path)
202 |                 messages[0]["content"].append({
203 |                     "type": "image",
204 |                     "source": {
205 |                         "type": "base64",
206 |                         "media_type": mime_type,
207 |                         "data": encoded_image
208 |                     }
209 |                 })
210 |             
211 |             response = client.messages.create(
212 |                 model=model,
213 |                 max_tokens=1000,
214 |                 messages=messages
215 |             )
216 |             return response.content[0].text
217 |             
218 |         elif provider == "gemini":
219 |             model = client.GenerativeModel(model)
220 |             if image_path:
221 |                 file = genai.upload_file(image_path, mime_type="image/png")
222 |                 chat_session = model.start_chat(
223 |                     history=[{
224 |                         "role": "user",
225 |                         "parts": [file, prompt]
226 |                     }]
227 |                 )
228 |             else:
229 |                 chat_session = model.start_chat(
230 |                     history=[{
231 |                         "role": "user",
232 |                         "parts": [prompt]
233 |                     }]
234 |                 )
235 |             response = chat_session.send_message(prompt)
236 |             return response.text
237 |             
238 |     except Exception as e:
239 |         print(f"Error querying LLM: {e}", file=sys.stderr)
240 |         return None
241 | 
242 | def main():
243 |     parser = argparse.ArgumentParser(description='Query an LLM with a prompt')
244 |     parser.add_argument('--prompt', type=str, help='The prompt to send to the LLM', required=True)
245 |     parser.add_argument('--provider', choices=['openai','anthropic','gemini','local','deepseek','azure','siliconflow'], default='openai', help='The API provider to use')
246 |     parser.add_argument('--model', type=str, help='The model to use (default depends on provider)')
247 |     parser.add_argument('--image', type=str, help='Path to an image file to attach to the prompt')
248 |     args = parser.parse_args()
249 | 
250 |     if not args.model:
251 |         if args.provider == 'openai':
252 |             args.model = "gpt-4o" 
253 |         elif args.provider == "deepseek":
254 |             args.model = "deepseek-chat"
255 |         elif args.provider == "siliconflow":
256 |             args.model = "deepseek-ai/DeepSeek-R1"
257 |         elif args.provider == 'anthropic':
258 |             args.model = "claude-3-5-sonnet-20241022"
259 |         elif args.provider == 'gemini':
260 |             args.model = "gemini-2.0-flash-exp"
261 |         elif args.provider == 'azure':
262 |             args.model = os.getenv('AZURE_OPENAI_MODEL_DEPLOYMENT', 'gpt-4o-ms')  # Get from env with fallback
263 | 
264 |     client = create_llm_client(args.provider)
265 |     response = query_llm(args.prompt, client, model=args.model, provider=args.provider, image_path=args.image)
266 |     if response:
267 |         print(response)
268 |     else:
269 |         print("Failed to get response from LLM")
270 | 
271 | if __name__ == "__main__":
272 |     main()
```

tools/screenshot_utils.py
```
1 | #!/usr/bin/env python3
2 | 
3 | import asyncio
4 | from playwright.async_api import async_playwright
5 | import os
6 | import tempfile
7 | from pathlib import Path
8 | 
9 | async def take_screenshot(url: str, output_path: str = None, width: int = 1280, height: int = 720) -> str:
10 |     """
11 |     Take a screenshot of a webpage using Playwright.
12 |     
13 |     Args:
14 |         url (str): The URL to take a screenshot of
15 |         output_path (str, optional): Path to save the screenshot. If None, saves to a temporary file.
16 |         width (int, optional): Viewport width. Defaults to 1280.
17 |         height (int, optional): Viewport height. Defaults to 720.
18 |     
19 |     Returns:
20 |         str: Path to the saved screenshot
21 |     """
22 |     if output_path is None:
23 |         # Create a temporary file with .png extension
24 |         temp_file = tempfile.NamedTemporaryFile(suffix='.png', delete=False)
25 |         output_path = temp_file.name
26 |         temp_file.close()
27 | 
28 |     async with async_playwright() as p:
29 |         browser = await p.chromium.launch(headless=True)
30 |         page = await browser.new_page(viewport={'width': width, 'height': height})
31 |         
32 |         try:
33 |             await page.goto(url, wait_until='networkidle')
34 |             await page.screenshot(path=output_path, full_page=True)
35 |         finally:
36 |             await browser.close()
37 |     
38 |     return output_path
39 | 
40 | def take_screenshot_sync(url: str, output_path: str = None, width: int = 1280, height: int = 720) -> str:
41 |     """
42 |     Synchronous wrapper for take_screenshot.
43 |     """
44 |     return asyncio.run(take_screenshot(url, output_path, width, height))
45 | 
46 | if __name__ == "__main__":
47 |     import argparse
48 |     parser = argparse.ArgumentParser(description='Take a screenshot of a webpage')
49 |     parser.add_argument('url', help='URL to take screenshot of')
50 |     parser.add_argument('--output', '-o', help='Output path for screenshot')
51 |     parser.add_argument('--width', '-w', type=int, default=1280, help='Viewport width')
52 |     parser.add_argument('--height', '-H', type=int, default=720, help='Viewport height')
53 |     
54 |     args = parser.parse_args()
55 |     output_path = take_screenshot_sync(args.url, args.output, args.width, args.height)
56 |     print(f"Screenshot saved to: {output_path}") 
```

tools/search_engine.py
```
1 | #!/usr/bin/env python3
2 | 
3 | import argparse
4 | import sys
5 | import time
6 | from duckduckgo_search import DDGS
7 | 
8 | def search_with_retry(query, max_results=10, max_retries=3):
9 |     """
10 |     Search using DuckDuckGo and return results with URLs and text snippets.
11 |     
12 |     Args:
13 |         query (str): Search query
14 |         max_results (int): Maximum number of results to return
15 |         max_retries (int): Maximum number of retry attempts
16 |     """
17 |     for attempt in range(max_retries):
18 |         try:
19 |             print(f"DEBUG: Searching for query: {query} (attempt {attempt + 1}/{max_retries})", 
20 |                   file=sys.stderr)
21 |             
22 |             with DDGS() as ddgs:
23 |                 results = list(ddgs.text(query, max_results=max_results))
24 |                 
25 |             if not results:
26 |                 print("DEBUG: No results found", file=sys.stderr)
27 |                 return []
28 |             
29 |             print(f"DEBUG: Found {len(results)} results", file=sys.stderr)
30 |             return results
31 |                 
32 |         except Exception as e:
33 |             print(f"ERROR: Attempt {attempt + 1}/{max_retries} failed: {str(e)}", file=sys.stderr)
34 |             if attempt < max_retries - 1:  # If not the last attempt
35 |                 print(f"DEBUG: Waiting 1 second before retry...", file=sys.stderr)
36 |                 time.sleep(1)  # Wait 1 second before retry
37 |             else:
38 |                 print(f"ERROR: All {max_retries} attempts failed", file=sys.stderr)
39 |                 raise
40 | 
41 | def format_results(results):
42 |     """Format and print search results."""
43 |     for i, r in enumerate(results, 1):
44 |         print(f"\n=== Result {i} ===")
45 |         print(f"URL: {r.get('href', 'N/A')}")
46 |         print(f"Title: {r.get('title', 'N/A')}")
47 |         print(f"Snippet: {r.get('body', 'N/A')}")
48 | 
49 | def search(query, max_results=10, max_retries=3):
50 |     """
51 |     Main search function that handles search with retry mechanism.
52 |     
53 |     Args:
54 |         query (str): Search query
55 |         max_results (int): Maximum number of results to return
56 |         max_retries (int): Maximum number of retry attempts
57 |     """
58 |     try:
59 |         results = search_with_retry(query, max_results, max_retries)
60 |         if results:
61 |             format_results(results)
62 |             
63 |     except Exception as e:
64 |         print(f"ERROR: Search failed: {str(e)}", file=sys.stderr)
65 |         sys.exit(1)
66 | 
67 | def main():
68 |     parser = argparse.ArgumentParser(description="Search using DuckDuckGo API")
69 |     parser.add_argument("query", help="Search query")
70 |     parser.add_argument("--max-results", type=int, default=10,
71 |                       help="Maximum number of results (default: 10)")
72 |     parser.add_argument("--max-retries", type=int, default=3,
73 |                       help="Maximum number of retry attempts (default: 3)")
74 |     
75 |     args = parser.parse_args()
76 |     search(args.query, args.max_results, args.max_retries)
77 | 
78 | if __name__ == "__main__":
79 |     main()
```

tools/web_scraper.py
```
1 | #!/usr/bin/env /workspace/tmp_windsurf/venv/bin/python3
2 | 
3 | import asyncio
4 | import argparse
5 | import sys
6 | import os
7 | from typing import List, Optional
8 | from playwright.async_api import async_playwright
9 | import html5lib
10 | from multiprocessing import Pool
11 | import time
12 | from urllib.parse import urlparse
13 | import logging
14 | 
15 | # Configure logging
16 | logging.basicConfig(
17 |     level=logging.INFO,
18 |     format='%(asctime)s - %(levelname)s - %(message)s',
19 |     stream=sys.stderr
20 | )
21 | logger = logging.getLogger(__name__)
22 | 
23 | async def fetch_page(url: str, context) -> Optional[str]:
24 |     """Asynchronously fetch a webpage's content."""
25 |     page = await context.new_page()
26 |     try:
27 |         logger.info(f"Fetching {url}")
28 |         await page.goto(url)
29 |         await page.wait_for_load_state('networkidle')
30 |         content = await page.content()
31 |         logger.info(f"Successfully fetched {url}")
32 |         return content
33 |     except Exception as e:
34 |         logger.error(f"Error fetching {url}: {str(e)}")
35 |         return None
36 |     finally:
37 |         await page.close()
38 | 
39 | def parse_html(html_content: Optional[str]) -> str:
40 |     """Parse HTML content and extract text with hyperlinks in markdown format."""
41 |     if not html_content:
42 |         return ""
43 |     
44 |     try:
45 |         document = html5lib.parse(html_content)
46 |         result = []
47 |         seen_texts = set()  # To avoid duplicates
48 |         
49 |         def should_skip_element(elem) -> bool:
50 |             """Check if the element should be skipped."""
51 |             # Skip script and style tags
52 |             if elem.tag in ['{http://www.w3.org/1999/xhtml}script', 
53 |                           '{http://www.w3.org/1999/xhtml}style']:
54 |                 return True
55 |             # Skip empty elements or elements with only whitespace
56 |             if not any(text.strip() for text in elem.itertext()):
57 |                 return True
58 |             return False
59 |         
60 |         def process_element(elem, depth=0):
61 |             """Process an element and its children recursively."""
62 |             if should_skip_element(elem):
63 |                 return
64 |             
65 |             # Handle text content
66 |             if hasattr(elem, 'text') and elem.text:
67 |                 text = elem.text.strip()
68 |                 if text and text not in seen_texts:
69 |                     # Check if this is an anchor tag
70 |                     if elem.tag == '{http://www.w3.org/1999/xhtml}a':
71 |                         href = None
72 |                         for attr, value in elem.items():
73 |                             if attr.endswith('href'):
74 |                                 href = value
75 |                                 break
76 |                         if href and not href.startswith(('#', 'javascript:')):
77 |                             # Format as markdown link
78 |                             link_text = f"[{text}]({href})"
79 |                             result.append("  " * depth + link_text)
80 |                             seen_texts.add(text)
81 |                     else:
82 |                         result.append("  " * depth + text)
83 |                         seen_texts.add(text)
84 |             
85 |             # Process children
86 |             for child in elem:
87 |                 process_element(child, depth + 1)
88 |             
89 |             # Handle tail text
90 |             if hasattr(elem, 'tail') and elem.tail:
91 |                 tail = elem.tail.strip()
92 |                 if tail and tail not in seen_texts:
93 |                     result.append("  " * depth + tail)
94 |                     seen_texts.add(tail)
95 |         
96 |         # Start processing from the body tag
97 |         body = document.find('.//{http://www.w3.org/1999/xhtml}body')
98 |         if body is not None:
99 |             process_element(body)
100 |         else:
101 |             # Fallback to processing the entire document
102 |             process_element(document)
103 |         
104 |         # Filter out common unwanted patterns
105 |         filtered_result = []
106 |         for line in result:
107 |             # Skip lines that are likely to be noise
108 |             if any(pattern in line.lower() for pattern in [
109 |                 'var ', 
110 |                 'function()', 
111 |                 '.js',
112 |                 '.css',
113 |                 'google-analytics',
114 |                 'disqus',
115 |                 '{',
116 |                 '}'
117 |             ]):
118 |                 continue
119 |             filtered_result.append(line)
120 |         
121 |         return '\n'.join(filtered_result)
122 |     except Exception as e:
123 |         logger.error(f"Error parsing HTML: {str(e)}")
124 |         return ""
125 | 
126 | async def process_urls(urls: List[str], max_concurrent: int = 5) -> List[str]:
127 |     """Process multiple URLs concurrently."""
128 |     async with async_playwright() as p:
129 |         browser = await p.chromium.launch()
130 |         try:
131 |             # Create browser contexts
132 |             n_contexts = min(len(urls), max_concurrent)
133 |             contexts = [await browser.new_context() for _ in range(n_contexts)]
134 |             
135 |             # Create tasks for each URL
136 |             tasks = []
137 |             for i, url in enumerate(urls):
138 |                 context = contexts[i % len(contexts)]
139 |                 task = fetch_page(url, context)
140 |                 tasks.append(task)
141 |             
142 |             # Gather results
143 |             html_contents = await asyncio.gather(*tasks)
144 |             
145 |             # Parse HTML contents in parallel
146 |             with Pool() as pool:
147 |                 results = pool.map(parse_html, html_contents)
148 |                 
149 |             return results
150 |             
151 |         finally:
152 |             # Cleanup
153 |             for context in contexts:
154 |                 await context.close()
155 |             await browser.close()
156 | 
157 | def validate_url(url: str) -> bool:
158 |     """Validate if the given string is a valid URL."""
159 |     try:
160 |         result = urlparse(url)
161 |         return all([result.scheme, result.netloc])
162 |     except:
163 |         return False
164 | 
165 | def main():
166 |     parser = argparse.ArgumentParser(description='Fetch and extract text content from webpages.')
167 |     parser.add_argument('urls', nargs='+', help='URLs to process')
168 |     parser.add_argument('--max-concurrent', type=int, default=5,
169 |                        help='Maximum number of concurrent browser instances (default: 5)')
170 |     parser.add_argument('--debug', action='store_true',
171 |                        help='Enable debug logging')
172 |     
173 |     args = parser.parse_args()
174 |     
175 |     if args.debug:
176 |         logger.setLevel(logging.DEBUG)
177 |     
178 |     # Validate URLs
179 |     valid_urls = []
180 |     for url in args.urls:
181 |         if validate_url(url):
182 |             valid_urls.append(url)
183 |         else:
184 |             logger.error(f"Invalid URL: {url}")
185 |     
186 |     if not valid_urls:
187 |         logger.error("No valid URLs provided")
188 |         sys.exit(1)
189 |     
190 |     start_time = time.time()
191 |     try:
192 |         results = asyncio.run(process_urls(valid_urls, args.max_concurrent))
193 |         
194 |         # Print results to stdout
195 |         for url, text in zip(valid_urls, results):
196 |             print(f"\n=== Content from {url} ===")
197 |             print(text)
198 |             print("=" * 80)
199 |         
200 |         logger.info(f"Total processing time: {time.time() - start_time:.2f}s")
201 |         
202 |     except Exception as e:
203 |         logger.error(f"Error during execution: {str(e)}")
204 |         sys.exit(1)
205 | 
206 | if __name__ == '__main__':
207 |     main() 
```

src/app/globals.css
```
1 | @tailwind base;
2 | @tailwind components;
3 | @tailwind utilities;
4 | 
5 | @layer base {
6 |   :root {
7 |     --background: 0 0% 100%;
8 |     --foreground: 222.2 84% 4.9%;
9 | 
10 |     --muted: 210 40% 96.1%;
11 |     --muted-foreground: 215.4 16.3% 46.9%;
12 | 
13 |     --popover: 0 0% 100%;
14 |     --popover-foreground: 222.2 84% 4.9%;
15 | 
16 |     --card: 0 0% 100%;
17 |     --card-foreground: 222.2 84% 4.9%;
18 | 
19 |     --border: 214.3 31.8% 91.4%;
20 |     --input: 214.3 31.8% 91.4%;
21 | 
22 |     --primary: 221.2 83.2% 53.3%;
23 |     --primary-foreground: 210 40% 98%;
24 | 
25 |     --secondary: 210 40% 96.1%;
26 |     --secondary-foreground: 222.2 47.4% 11.2%;
27 | 
28 |     --accent: 210 40% 96.1%;
29 |     --accent-foreground: 222.2 47.4% 11.2%;
30 | 
31 |     --destructive: 0 84.2% 60.2%;
32 |     --destructive-foreground: 210 40% 98%;
33 | 
34 |     --ring: 215 20.2% 65.1%;
35 | 
36 |     --radius: 0.5rem;
37 |   }
38 | 
39 |   .dark {
40 |     --background: 222.2 84% 4.9%;
41 |     --foreground: 210 40% 98%;
42 | 
43 |     --muted: 217.2 32.6% 17.5%;
44 |     --muted-foreground: 215 20.2% 65.1%;
45 | 
46 |     --popover: 222.2 84% 4.9%;
47 |     --popover-foreground: 210 40% 98%;
48 | 
49 |     --card: 222.2 84% 4.9%;
50 |     --card-foreground: 210 40% 98%;
51 | 
52 |     --border: 217.2 32.6% 17.5%;
53 |     --input: 217.2 32.6% 17.5%;
54 | 
55 |     --primary: 217.2 91.2% 59.8%;
56 |     --primary-foreground: 222.2 47.4% 11.2%;
57 | 
58 |     --secondary: 217.2 32.6% 17.5%;
59 |     --secondary-foreground: 210 40% 98%;
60 | 
61 |     --accent: 217.2 32.6% 17.5%;
62 |     --accent-foreground: 210 40% 98%;
63 | 
64 |     --destructive: 0 62.8% 30.6%;
65 |     --destructive-foreground: 0 85.7% 97.3%;
66 | 
67 |     --ring: 217.2 32.6% 17.5%;
68 |   }
69 | }
70 | 
71 | @layer base {
72 |   * {
73 |     @apply border-border;
74 |   }
75 |   body {
76 |     @apply bg-background text-foreground;
77 |   }
78 | } 
```

src/app/layout.tsx
```
1 | import './globals.css'
2 | import { GeistSans } from "geist/font/sans"
3 | import { ThemeProvider } from "@/components/theme-provider"
4 | 
5 | export const metadata = {
6 |   title: 'Anyone - Code Analysis Made Simple',
7 |   description: 'Understand any codebase instantly with AI-powered analysis and documentation.',
8 | }
9 | 
10 | export default function RootLayout({
11 |   children,
12 | }: {
13 |   children: React.ReactNode
14 | }) {
15 |   return (
16 |     <html lang="en" suppressHydrationWarning>
17 |       <body className={GeistSans.className}>
18 |         <ThemeProvider
19 |           attribute="class"
20 |           defaultTheme="system"
21 |           enableSystem
22 |           disableTransitionOnChange
23 |         >
24 |           {children}
25 |         </ThemeProvider>
26 |       </body>
27 |     </html>
28 |   )
29 | } 
```

src/app/page.tsx
```
1 | import { Button } from "@/components/ui/button"
2 | import { RootLayout } from "@/components/layout/root-layout"
3 | 
4 | export default function Home() {
5 |   return (
6 |     <RootLayout>
7 |       <div className="min-h-screen bg-background">
8 |         {/* Hero Section */}
9 |         <section className="container mx-auto px-4 pt-20 md:pt-32">
10 |           <div className="flex flex-col items-center text-center space-y-8">
11 |             <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
12 |               Code Analysis Made Simple
13 |             </h1>
14 |             <p className="text-xl text-muted-foreground max-w-[600px]">
15 |               Understand any codebase instantly with AI-powered analysis and documentation.
16 |             </p>
17 |             <div className="flex gap-4">
18 |               <Button size="lg">
19 |                 Get Started
20 |               </Button>
21 |               <Button variant="outline" size="lg">
22 |                 Learn More
23 |               </Button>
24 |             </div>
25 |           </div>
26 |         </section>
27 | 
28 |         {/* Features Grid */}
29 |         <section className="container mx-auto px-4 py-20">
30 |           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
31 |             {/* Feature cards will go here */}
32 |           </div>
33 |         </section>
34 |       </div>
35 |     </RootLayout>
36 |   )
37 | } 
```

src/components/theme-provider.tsx
```
1 | "use client"
2 | 
3 | import * as React from "react"
4 | import { ThemeProvider as NextThemesProvider } from "next-themes"
5 | import { type ThemeProviderProps } from "next-themes/dist/types"
6 | 
7 | export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
8 |   return <NextThemesProvider {...props}>{children}</NextThemesProvider>
9 | } 
```

src/lib/utils.ts
```
1 | import { clsx, type ClassValue } from "clsx"
2 | import { twMerge } from "tailwind-merge"
3 | 
4 | export function cn(...inputs: ClassValue[]) {
5 |   return twMerge(clsx(inputs))
6 | }
```

src/styles/globals.css
```
1 | @tailwind base;
2 | @tailwind components;
3 | @tailwind utilities;
4 | 
5 | @layer base {
6 |   :root {
7 |     --background: 0 0% 100%;
8 |     --foreground: 240 10% 3.9%;
9 |     --card: 0 0% 100%;
10 |     --card-foreground: 240 10% 3.9%;
11 |     --popover: 0 0% 100%;
12 |     --popover-foreground: 240 10% 3.9%;
13 |     --primary: 240 5.9% 10%;
14 |     --primary-foreground: 0 0% 98%;
15 |     --secondary: 240 4.8% 95.9%;
16 |     --secondary-foreground: 240 5.9% 10%;
17 |     --muted: 240 4.8% 95.9%;
18 |     --muted-foreground: 240 3.8% 46.1%;
19 |     --accent: 240 4.8% 95.9%;
20 |     --accent-foreground: 240 5.9% 10%;
21 |     --destructive: 0 84.2% 60.2%;
22 |     --destructive-foreground: 0 0% 98%;
23 |     --border: 240 5.9% 90%;
24 |     --input: 240 5.9% 90%;
25 |     --ring: 240 10% 3.9%;
26 |     --chart-1: 12 76% 61%;
27 |     --chart-2: 173 58% 39%;
28 |     --chart-3: 197 37% 24%;
29 |     --chart-4: 43 74% 66%;
30 |     --chart-5: 27 87% 67%;
31 |     --radius: 0.5rem
32 |   }
33 |   .dark {
34 |     --background: 240 10% 3.9%;
35 |     --foreground: 0 0% 98%;
36 |     --card: 240 10% 3.9%;
37 |     --card-foreground: 0 0% 98%;
38 |     --popover: 240 10% 3.9%;
39 |     --popover-foreground: 0 0% 98%;
40 |     --primary: 0 0% 98%;
41 |     --primary-foreground: 240 5.9% 10%;
42 |     --secondary: 240 3.7% 15.9%;
43 |     --secondary-foreground: 0 0% 98%;
44 |     --muted: 240 3.7% 15.9%;
45 |     --muted-foreground: 240 5% 64.9%;
46 |     --accent: 240 3.7% 15.9%;
47 |     --accent-foreground: 0 0% 98%;
48 |     --destructive: 0 62.8% 30.6%;
49 |     --destructive-foreground: 0 0% 98%;
50 |     --border: 240 3.7% 15.9%;
51 |     --input: 240 3.7% 15.9%;
52 |     --ring: 240 4.9% 83.9%;
53 |     --chart-1: 220 70% 50%;
54 |     --chart-2: 160 60% 45%;
55 |     --chart-3: 30 80% 55%;
56 |     --chart-4: 280 65% 60%;
57 |     --chart-5: 340 75% 55%
58 |   }
59 | }
60 | 
61 | @layer base {
62 |   * {
63 |     @apply border-border;
64 |   }
65 |   body {
66 |     @apply bg-background text-foreground;
67 |   }
68 | }
```

src/styles/theme.ts
```
1 | export const theme = {
2 |   colors: {
3 |     primary: {
4 |       DEFAULT: '#2563eb', // Blue
5 |       light: '#3b82f6',
6 |       dark: '#1d4ed8',
7 |     },
8 |     success: {
9 |       DEFAULT: '#22c55e', // Green
10 |       light: '#4ade80',
11 |       dark: '#16a34a',
12 |     },
13 |     warning: {
14 |       DEFAULT: '#f59e0b', // Amber
15 |       light: '#fbbf24',
16 |       dark: '#d97706',
17 |     },
18 |     error: {
19 |       DEFAULT: '#ef4444', // Red
20 |       light: '#f87171',
21 |       dark: '#dc2626',
22 |     },
23 |     neutral: {
24 |       50: '#f8fafc',
25 |       100: '#f1f5f9',
26 |       200: '#e2e8f0',
27 |       300: '#cbd5e1',
28 |       400: '#94a3b8',
29 |       500: '#64748b',
30 |       600: '#475569',
31 |       700: '#334155',
32 |       800: '#1e293b',
33 |       900: '#0f172a',
34 |     },
35 |   },
36 |   typography: {
37 |     fonts: {
38 |       heading: 'Inter, sans-serif',
39 |       body: 'system-ui, sans-serif',
40 |       code: 'JetBrains Mono, monospace',
41 |     },
42 |     sizes: {
43 |       xs: '0.75rem',
44 |       sm: '0.875rem',
45 |       base: '1rem',
46 |       lg: '1.125rem',
47 |       xl: '1.25rem',
48 |       '2xl': '1.5rem',
49 |       '3xl': '1.875rem',
50 |       '4xl': '2.25rem',
51 |       '5xl': '3rem',
52 |     },
53 |   },
54 |   spacing: {
55 |     px: '1px',
56 |     0: '0',
57 |     0.5: '0.125rem',
58 |     1: '0.25rem',
59 |     1.5: '0.375rem',
60 |     2: '0.5rem',
61 |     2.5: '0.625rem',
62 |     3: '0.75rem',
63 |     3.5: '0.875rem',
64 |     4: '1rem',
65 |     5: '1.25rem',
66 |     6: '1.5rem',
67 |     7: '1.75rem',
68 |     8: '2rem',
69 |     9: '2.25rem',
70 |     10: '2.5rem',
71 |     12: '3rem',
72 |     14: '3.5rem',
73 |     16: '4rem',
74 |     20: '5rem',
75 |     24: '6rem',
76 |     28: '7rem',
77 |     32: '8rem',
78 |     36: '9rem',
79 |     40: '10rem',
80 |     44: '11rem',
81 |     48: '12rem',
82 |     52: '13rem',
83 |     56: '14rem',
84 |     60: '15rem',
85 |     64: '16rem',
86 |     72: '18rem',
87 |     80: '20rem',
88 |     96: '24rem',
89 |   },
90 |   shadows: {
91 |     sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
92 |     DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
93 |     md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
94 |     lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
95 |     xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
96 |     '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
97 |     inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
98 |   },
99 |   radii: {
100 |     none: '0',
101 |     sm: '0.125rem',
102 |     DEFAULT: '0.25rem',
103 |     md: '0.375rem',
104 |     lg: '0.5rem',
105 |     xl: '0.75rem',
106 |     '2xl': '1rem',
107 |     '3xl': '1.5rem',
108 |     full: '9999px',
109 |   },
110 | } as const; 
```

src/utils/api.ts
```
1 | /**
2 |  * This is the client-side entrypoint for your tRPC API. It is used to create the `api` object which
3 |  * contains the Next.js App-wrapper, as well as your type-safe React Query hooks.
4 |  *
5 |  * We also create a few inference helpers for input and output types.
6 |  */
7 | import { httpBatchLink, loggerLink } from "@trpc/client";
8 | import { createTRPCNext } from "@trpc/next";
9 | import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
10 | import superjson from "superjson";
11 | 
12 | import { type AppRouter } from "~/server/api/root";
13 | 
14 | const getBaseUrl = () => {
15 |   if (typeof window !== "undefined") return ""; // browser should use relative url
16 |   if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
17 |   return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
18 | };
19 | 
20 | /** A set of type-safe react-query hooks for your tRPC API. */
21 | export const api = createTRPCNext<AppRouter>({
22 |   config() {
23 |     return {
24 |       /**
25 |        * Links used to determine request flow from client to server.
26 |        *
27 |        * @see https://trpc.io/docs/links
28 |        */
29 |       links: [
30 |         loggerLink({
31 |           enabled: (opts) =>
32 |             process.env.NODE_ENV === "development" ||
33 |             (opts.direction === "down" && opts.result instanceof Error),
34 |         }),
35 |         httpBatchLink({
36 |           /**
37 |            * Transformer used for data de-serialization from the server.
38 |            *
39 |            * @see https://trpc.io/docs/data-transformers
40 |            */
41 |           transformer: superjson,
42 |           url: `${getBaseUrl()}/api/trpc`,
43 |         }),
44 |       ],
45 |     };
46 |   },
47 |   /**
48 |    * Whether tRPC should await queries when server rendering pages.
49 |    *
50 |    * @see https://trpc.io/docs/nextjs#ssr-boolean-default-false
51 |    */
52 |   ssr: false,
53 |   transformer: superjson,
54 | });
55 | 
56 | /**
57 |  * Inference helper for inputs.
58 |  *
59 |  * @example type HelloInput = RouterInputs['example']['hello']
60 |  */
61 | export type RouterInputs = inferRouterInputs<AppRouter>;
62 | 
63 | /**
64 |  * Inference helper for outputs.
65 |  *
66 |  * @example type HelloOutput = RouterOutputs['example']['hello']
67 |  */
68 | export type RouterOutputs = inferRouterOutputs<AppRouter>;
```

src/components/ui/button.tsx
```
1 | import * as React from "react"
2 | import { Slot } from "@radix-ui/react-slot"
3 | import { cva, type VariantProps } from "class-variance-authority"
4 | 
5 | import { cn } from "~/lib/utils"
6 | 
7 | const buttonVariants = cva(
8 |   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
9 |   {
10 |     variants: {
11 |       variant: {
12 |         default:
13 |           "bg-primary text-primary-foreground shadow hover:bg-primary/90",
14 |         destructive:
15 |           "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
16 |         outline:
17 |           "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
18 |         secondary:
19 |           "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
20 |         ghost: "hover:bg-accent hover:text-accent-foreground",
21 |         link: "text-primary underline-offset-4 hover:underline",
22 |       },
23 |       size: {
24 |         default: "h-9 px-4 py-2",
25 |         sm: "h-8 rounded-md px-3 text-xs",
26 |         lg: "h-10 rounded-md px-8",
27 |         icon: "h-9 w-9",
28 |       },
29 |     },
30 |     defaultVariants: {
31 |       variant: "default",
32 |       size: "default",
33 |     },
34 |   }
35 | )
36 | 
37 | export interface ButtonProps
38 |   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
39 |     VariantProps<typeof buttonVariants> {
40 |   asChild?: boolean
41 | }
42 | 
43 | const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
44 |   ({ className, variant, size, asChild = false, ...props }, ref) => {
45 |     const Comp = asChild ? Slot : "button"
46 |     return (
47 |       <Comp
48 |         className={cn(buttonVariants({ variant, size, className }))}
49 |         ref={ref}
50 |         {...props}
51 |       />
52 |     )
53 |   }
54 | )
55 | Button.displayName = "Button"
56 | 
57 | export { Button, buttonVariants }
```

src/components/ui/card.tsx
```
1 | import * as React from "react"
2 | 
3 | import { cn } from "~/lib/utils"
4 | 
5 | const Card = React.forwardRef<
6 |   HTMLDivElement,
7 |   React.HTMLAttributes<HTMLDivElement>
8 | >(({ className, ...props }, ref) => (
9 |   <div
10 |     ref={ref}
11 |     className={cn(
12 |       "rounded-xl border bg-card text-card-foreground shadow",
13 |       className
14 |     )}
15 |     {...props}
16 |   />
17 | ))
18 | Card.displayName = "Card"
19 | 
20 | const CardHeader = React.forwardRef<
21 |   HTMLDivElement,
22 |   React.HTMLAttributes<HTMLDivElement>
23 | >(({ className, ...props }, ref) => (
24 |   <div
25 |     ref={ref}
26 |     className={cn("flex flex-col space-y-1.5 p-6", className)}
27 |     {...props}
28 |   />
29 | ))
30 | CardHeader.displayName = "CardHeader"
31 | 
32 | const CardTitle = React.forwardRef<
33 |   HTMLDivElement,
34 |   React.HTMLAttributes<HTMLDivElement>
35 | >(({ className, ...props }, ref) => (
36 |   <div
37 |     ref={ref}
38 |     className={cn("font-semibold leading-none tracking-tight", className)}
39 |     {...props}
40 |   />
41 | ))
42 | CardTitle.displayName = "CardTitle"
43 | 
44 | const CardDescription = React.forwardRef<
45 |   HTMLDivElement,
46 |   React.HTMLAttributes<HTMLDivElement>
47 | >(({ className, ...props }, ref) => (
48 |   <div
49 |     ref={ref}
50 |     className={cn("text-sm text-muted-foreground", className)}
51 |     {...props}
52 |   />
53 | ))
54 | CardDescription.displayName = "CardDescription"
55 | 
56 | const CardContent = React.forwardRef<
57 |   HTMLDivElement,
58 |   React.HTMLAttributes<HTMLDivElement>
59 | >(({ className, ...props }, ref) => (
60 |   <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
61 | ))
62 | CardContent.displayName = "CardContent"
63 | 
64 | const CardFooter = React.forwardRef<
65 |   HTMLDivElement,
66 |   React.HTMLAttributes<HTMLDivElement>
67 | >(({ className, ...props }, ref) => (
68 |   <div
69 |     ref={ref}
70 |     className={cn("flex items-center p-6 pt-0", className)}
71 |     {...props}
72 |   />
73 | ))
74 | CardFooter.displayName = "CardFooter"
75 | 
76 | export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

src/components/ui/dialog.tsx
```
1 | import * as React from "react"
2 | import * as DialogPrimitive from "@radix-ui/react-dialog"
3 | import { X } from "lucide-react"
4 | 
5 | import { cn } from "~/lib/utils"
6 | 
7 | const Dialog = DialogPrimitive.Root
8 | 
9 | const DialogTrigger = DialogPrimitive.Trigger
10 | 
11 | const DialogPortal = DialogPrimitive.Portal
12 | 
13 | const DialogClose = DialogPrimitive.Close
14 | 
15 | const DialogOverlay = React.forwardRef<
16 |   React.ElementRef<typeof DialogPrimitive.Overlay>,
17 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
18 | >(({ className, ...props }, ref) => (
19 |   <DialogPrimitive.Overlay
20 |     ref={ref}
21 |     className={cn(
22 |       "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
23 |       className
24 |     )}
25 |     {...props}
26 |   />
27 | ))
28 | DialogOverlay.displayName = DialogPrimitive.Overlay.displayName
29 | 
30 | const DialogContent = React.forwardRef<
31 |   React.ElementRef<typeof DialogPrimitive.Content>,
32 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
33 | >(({ className, children, ...props }, ref) => (
34 |   <DialogPortal>
35 |     <DialogOverlay />
36 |     <DialogPrimitive.Content
37 |       ref={ref}
38 |       className={cn(
39 |         "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
40 |         className
41 |       )}
42 |       {...props}
43 |     >
44 |       {children}
45 |       <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
46 |         <X className="h-4 w-4" />
47 |         <span className="sr-only">Close</span>
48 |       </DialogPrimitive.Close>
49 |     </DialogPrimitive.Content>
50 |   </DialogPortal>
51 | ))
52 | DialogContent.displayName = DialogPrimitive.Content.displayName
53 | 
54 | const DialogHeader = ({
55 |   className,
56 |   ...props
57 | }: React.HTMLAttributes<HTMLDivElement>) => (
58 |   <div
59 |     className={cn(
60 |       "flex flex-col space-y-1.5 text-center sm:text-left",
61 |       className
62 |     )}
63 |     {...props}
64 |   />
65 | )
66 | DialogHeader.displayName = "DialogHeader"
67 | 
68 | const DialogFooter = ({
69 |   className,
70 |   ...props
71 | }: React.HTMLAttributes<HTMLDivElement>) => (
72 |   <div
73 |     className={cn(
74 |       "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
75 |       className
76 |     )}
77 |     {...props}
78 |   />
79 | )
80 | DialogFooter.displayName = "DialogFooter"
81 | 
82 | const DialogTitle = React.forwardRef<
83 |   React.ElementRef<typeof DialogPrimitive.Title>,
84 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
85 | >(({ className, ...props }, ref) => (
86 |   <DialogPrimitive.Title
87 |     ref={ref}
88 |     className={cn(
89 |       "text-lg font-semibold leading-none tracking-tight",
90 |       className
91 |     )}
92 |     {...props}
93 |   />
94 | ))
95 | DialogTitle.displayName = DialogPrimitive.Title.displayName
96 | 
97 | const DialogDescription = React.forwardRef<
98 |   React.ElementRef<typeof DialogPrimitive.Description>,
99 |   React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
100 | >(({ className, ...props }, ref) => (
101 |   <DialogPrimitive.Description
102 |     ref={ref}
103 |     className={cn("text-sm text-muted-foreground", className)}
104 |     {...props}
105 |   />
106 | ))
107 | DialogDescription.displayName = DialogPrimitive.Description.displayName
108 | 
109 | export {
110 |   Dialog,
111 |   DialogPortal,
112 |   DialogOverlay,
113 |   DialogTrigger,
114 |   DialogClose,
115 |   DialogContent,
116 |   DialogHeader,
117 |   DialogFooter,
118 |   DialogTitle,
119 |   DialogDescription,
120 | }
```

src/components/ui/progress.tsx
```
1 | import * as React from "react"
2 | import * as ProgressPrimitive from "@radix-ui/react-progress"
3 | 
4 | import { cn } from "~/lib/utils"
5 | 
6 | const Progress = React.forwardRef<
7 |   React.ElementRef<typeof ProgressPrimitive.Root>,
8 |   React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
9 | >(({ className, value, ...props }, ref) => (
10 |   <ProgressPrimitive.Root
11 |     ref={ref}
12 |     className={cn(
13 |       "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
14 |       className
15 |     )}
16 |     {...props}
17 |   >
18 |     <ProgressPrimitive.Indicator
19 |       className="h-full w-full flex-1 bg-primary transition-all"
20 |       style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
21 |     />
22 |   </ProgressPrimitive.Root>
23 | ))
24 | Progress.displayName = ProgressPrimitive.Root.displayName
25 | 
26 | export { Progress }
```

src/components/ui/tabs.tsx
```
1 | import * as React from "react"
2 | import * as TabsPrimitive from "@radix-ui/react-tabs"
3 | 
4 | import { cn } from "~/lib/utils"
5 | 
6 | const Tabs = TabsPrimitive.Root
7 | 
8 | const TabsList = React.forwardRef<
9 |   React.ElementRef<typeof TabsPrimitive.List>,
10 |   React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
11 | >(({ className, ...props }, ref) => (
12 |   <TabsPrimitive.List
13 |     ref={ref}
14 |     className={cn(
15 |       "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
16 |       className
17 |     )}
18 |     {...props}
19 |   />
20 | ))
21 | TabsList.displayName = TabsPrimitive.List.displayName
22 | 
23 | const TabsTrigger = React.forwardRef<
24 |   React.ElementRef<typeof TabsPrimitive.Trigger>,
25 |   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
26 | >(({ className, ...props }, ref) => (
27 |   <TabsPrimitive.Trigger
28 |     ref={ref}
29 |     className={cn(
30 |       "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
31 |       className
32 |     )}
33 |     {...props}
34 |   />
35 | ))
36 | TabsTrigger.displayName = TabsPrimitive.Trigger.displayName
37 | 
38 | const TabsContent = React.forwardRef<
39 |   React.ElementRef<typeof TabsPrimitive.Content>,
40 |   React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
41 | >(({ className, ...props }, ref) => (
42 |   <TabsPrimitive.Content
43 |     ref={ref}
44 |     className={cn(
45 |       "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
46 |       className
47 |     )}
48 |     {...props}
49 |   />
50 | ))
51 | TabsContent.displayName = TabsPrimitive.Content.displayName
52 | 
53 | export { Tabs, TabsList, TabsTrigger, TabsContent }
```

src/components/layout/footer.tsx
```
1 | import Link from "next/link";
2 | 
3 | export function Footer() {
4 |   return (
5 |     <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
6 |       <div className="container py-8 md:py-12">
7 |         <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
8 |           <div className="flex flex-col gap-2">
9 |             <h3 className="text-lg font-semibold">Product</h3>
10 |             <Link href="/features" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
11 |               Features
12 |             </Link>
13 |             <Link href="/pricing" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
14 |               Pricing
15 |             </Link>
16 |             <Link href="/docs" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
17 |               Documentation
18 |             </Link>
19 |           </div>
20 |           <div className="flex flex-col gap-2">
21 |             <h3 className="text-lg font-semibold">Resources</h3>
22 |             <Link href="/guides" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
23 |               Guides
24 |             </Link>
25 |             <Link href="/examples" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
26 |               Examples
27 |             </Link>
28 |             <Link href="/blog" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
29 |               Blog
30 |             </Link>
31 |           </div>
32 |           <div className="flex flex-col gap-2">
33 |             <h3 className="text-lg font-semibold">Company</h3>
34 |             <Link href="/about" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
35 |               About
36 |             </Link>
37 |             <Link href="/contact" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
38 |               Contact
39 |             </Link>
40 |             <Link href="/privacy" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
41 |               Privacy
42 |             </Link>
43 |           </div>
44 |           <div className="flex flex-col gap-2">
45 |             <h3 className="text-lg font-semibold">Legal</h3>
46 |             <Link href="/terms" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
47 |               Terms
48 |             </Link>
49 |             <Link href="/privacy" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
50 |               Privacy
51 |             </Link>
52 |             <Link href="/cookies" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
53 |               Cookies
54 |             </Link>
55 |           </div>
56 |         </div>
57 |         <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-800 md:flex-row">
58 |           <p className="text-sm text-neutral-500 dark:text-neutral-400">
59 |             © {new Date().getFullYear()} anyone. All rights reserved.
60 |           </p>
61 |           <div className="flex gap-4">
62 |             <Link href="https://twitter.com" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
63 |               Twitter
64 |             </Link>
65 |             <Link href="https://github.com" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
66 |               GitHub
67 |             </Link>
68 |             <Link href="https://discord.com" className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
69 |               Discord
70 |             </Link>
71 |           </div>
72 |         </div>
73 |       </div>
74 |     </footer>
75 |   );
76 | } 
```

src/components/layout/header.tsx
```
1 | import Link from "next/link";
2 | import { Button } from "@/components/ui/button";
3 | 
4 | export function Header() {
5 |   return (
6 |     <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/75 backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-900/75">
7 |       <div className="container flex h-16 items-center justify-between">
8 |         <div className="flex items-center gap-6">
9 |           <Link href="/" className="flex items-center space-x-2">
10 |             <span className="text-2xl font-bold text-primary">anyone</span>
11 |           </Link>
12 |           <nav className="hidden md:flex gap-6">
13 |             <Link href="/docs" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
14 |               Docs
15 |             </Link>
16 |             <Link href="/examples" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
17 |               Examples
18 |             </Link>
19 |           </nav>
20 |         </div>
21 |         <div className="flex items-center gap-4">
22 |           <Button variant="outline" size="sm">
23 |             Sign In
24 |           </Button>
25 |           <Button size="sm">Get Started</Button>
26 |         </div>
27 |       </div>
28 |     </header>
29 |   );
30 | } 
```

src/components/layout/root-layout.tsx
```
1 | import { type PropsWithChildren } from "react";
2 | import { Header } from "./header";
3 | import { Footer } from "./footer";
4 | 
5 | export function RootLayout({ children }: PropsWithChildren) {
6 |   return (
7 |     <div className="flex min-h-screen flex-col bg-white dark:bg-neutral-900">
8 |       <Header />
9 |       <main className="flex-1">{children}</main>
10 |       <Footer />
11 |     </div>
12 |   );
13 | } 
```

src/server/api/root.ts
```
1 | import { postRouter } from "~/server/api/routers/post";
2 | import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
3 | 
4 | /**
5 |  * This is the primary router for your server.
6 |  *
7 |  * All routers added in /api/routers should be manually added here.
8 |  */
9 | export const appRouter = createTRPCRouter({
10 |   post: postRouter,
11 | });
12 | 
13 | // export type definition of API
14 | export type AppRouter = typeof appRouter;
15 | 
16 | /**
17 |  * Create a server-side caller for the tRPC API.
18 |  * @example
19 |  * const trpc = createCaller(createContext);
20 |  * const res = await trpc.post.all();
21 |  *       ^? Post[]
22 |  */
23 | export const createCaller = createCallerFactory(appRouter);
```

src/server/api/trpc.ts
```
1 | /**
2 |  * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
3 |  * 1. You want to modify request context (see Part 1).
4 |  * 2. You want to create a new middleware or type of procedure (see Part 3).
5 |  *
6 |  * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
7 |  * need to use are documented accordingly near the end.
8 |  */
9 | 
10 | import { initTRPC } from "@trpc/server";
11 | import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
12 | import superjson from "superjson";
13 | import { ZodError } from "zod";
14 | 
15 | /**
16 |  * 1. CONTEXT
17 |  *
18 |  * This section defines the "contexts" that are available in the backend API.
19 |  *
20 |  * These allow you to access things when processing a request, like the database, the session, etc.
21 |  */
22 | 
23 | type CreateContextOptions = Record<string, never>;
24 | 
25 | /**
26 |  * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
27 |  * it from here.
28 |  *
29 |  * Examples of things you may need it for:
30 |  * - testing, so we don't have to mock Next.js' req/res
31 |  * - tRPC's `createSSGHelpers`, where we don't have req/res
32 |  *
33 |  * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
34 |  */
35 | const createInnerTRPCContext = (_opts: CreateContextOptions) => {
36 |   return {};
37 | };
38 | 
39 | /**
40 |  * This is the actual context you will use in your router. It will be used to process every request
41 |  * that goes through your tRPC endpoint.
42 |  *
43 |  * @see https://trpc.io/docs/context
44 |  */
45 | export const createTRPCContext = (_opts: CreateNextContextOptions) => {
46 |   return createInnerTRPCContext({});
47 | };
48 | 
49 | /**
50 |  * 2. INITIALIZATION
51 |  *
52 |  * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
53 |  * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
54 |  * errors on the backend.
55 |  */
56 | 
57 | const t = initTRPC.context<typeof createTRPCContext>().create({
58 |   transformer: superjson,
59 |   errorFormatter({ shape, error }) {
60 |     return {
61 |       ...shape,
62 |       data: {
63 |         ...shape.data,
64 |         zodError:
65 |           error.cause instanceof ZodError ? error.cause.flatten() : null,
66 |       },
67 |     };
68 |   },
69 | });
70 | 
71 | /**
72 |  * Create a server-side caller.
73 |  *
74 |  * @see https://trpc.io/docs/server/server-side-calls
75 |  */
76 | export const createCallerFactory = t.createCallerFactory;
77 | 
78 | /**
79 |  * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
80 |  *
81 |  * These are the pieces you use to build your tRPC API. You should import these a lot in the
82 |  * "/src/server/api/routers" directory.
83 |  */
84 | 
85 | /**
86 |  * This is how you create new routers and sub-routers in your tRPC API.
87 |  *
88 |  * @see https://trpc.io/docs/router
89 |  */
90 | export const createTRPCRouter = t.router;
91 | 
92 | /**
93 |  * Middleware for timing procedure execution and adding an artificial delay in development.
94 |  *
95 |  * You can remove this if you don't like it, but it can help catch unwanted waterfalls by simulating
96 |  * network latency that would occur in production but not in local development.
97 |  */
98 | const timingMiddleware = t.middleware(async ({ next, path }) => {
99 |   const start = Date.now();
100 | 
101 |   if (t._config.isDev) {
102 |     // artificial delay in dev
103 |     const waitMs = Math.floor(Math.random() * 400) + 100;
104 |     await new Promise((resolve) => setTimeout(resolve, waitMs));
105 |   }
106 | 
107 |   const result = await next();
108 | 
109 |   const end = Date.now();
110 |   console.log(`[TRPC] ${path} took ${end - start}ms to execute`);
111 | 
112 |   return result;
113 | });
114 | 
115 | /**
116 |  * Public (unauthenticated) procedure
117 |  *
118 |  * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
119 |  * guarantee that a user querying is authorized, but you can still access user session data if they
120 |  * are logged in.
121 |  */
122 | export const publicProcedure = t.procedure.use(timingMiddleware);
```

src/components/features/analysis/progress.tsx
```
1 | /**
2 |  * @file src/components/features/analysis/progress.tsx
3 |  * Analysis progress indicator
4 |  */
5 | 
6 | import { Progress } from "@/components/ui/progress"
7 | 
8 | export function AnalysisProgress() {
9 |   return (
10 |     // TODO: Implement analysis progress with:
11 |     // - Progress bar
12 |     // - Status messages
13 |     // - Cancel option
14 |     <div>Analysis Progress</div>
15 |   )
16 | } 
```

src/components/features/upload/repository-form.tsx
```
1 | /**
2 |  * @file src/components/features/upload/repository-form.tsx
3 |  * Repository upload interface
4 |  */
5 | 
6 | import { Button } from "@/components/ui/button"
7 | import { Card } from "@/components/ui/card"
8 | 
9 | export function RepositoryForm() {
10 |   return (
11 |     // TODO: Implement repository upload form with:
12 |     // - URL input
13 |     // - Validation
14 |     // - Submit button
15 |     <div>Repository Upload Form</div>
16 |   )
17 | } 
```

src/server/api/routers/post.ts
```
1 | import { z } from "zod";
2 | 
3 | import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
4 | 
5 | // Mocked DB
6 | interface Post {
7 |   id: number;
8 |   name: string;
9 | }
10 | const posts: Post[] = [
11 |   {
12 |     id: 1,
13 |     name: "Hello World",
14 |   },
15 | ];
16 | 
17 | export const postRouter = createTRPCRouter({
18 |   hello: publicProcedure
19 |     .input(z.object({ text: z.string() }))
20 |     .query(({ input }) => {
21 |       return {
22 |         greeting: `Hello ${input.text}`,
23 |       };
24 |     }),
25 | 
26 |   create: publicProcedure
27 |     .input(z.object({ name: z.string().min(1) }))
28 |     .mutation(async ({ input }) => {
29 |       const post: Post = {
30 |         id: posts.length + 1,
31 |         name: input.name,
32 |       };
33 |       posts.push(post);
34 |       return post;
35 |     }),
36 | 
37 |   getLatest: publicProcedure.query(() => {
38 |     return posts.at(-1) ?? null;
39 |   }),
40 | });
```

src/components/features/welcome/hero.tsx
```
1 | /**
2 |  * @file src/components/features/welcome/hero.tsx
3 |  * Hero section component for the welcome screen
4 |  */
5 | 
6 | import { Button } from "@/components/ui/button"
7 | import { Card } from "@/components/ui/card"
8 | 
9 | export function Hero() {
10 |   return (
11 |     // TODO: Implement hero section with:
12 |     // - Headline
13 |     // - Description
14 |     // - CTA button
15 |     // - Visual elements
16 |     <div>Hero Section</div>
17 |   )
18 | } 
```

src/components/features/welcome/quick-start.tsx
```
1 | /**
2 |  * @file src/components/features/welcome/quick-start.tsx
3 |  * Quick start guide component
4 |  */
5 | 
6 | import { Card } from "@/components/ui/card"
7 | 
8 | export function QuickStart() {
9 |   return (
10 |     // TODO: Implement quick start guide with:
11 |     // - Step-by-step instructions
12 |     // - Visual indicators
13 |     // - Example snippets
14 |     <div>Quick Start Guide</div>
15 |   )
16 | } 
```
