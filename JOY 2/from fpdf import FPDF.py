from fpdf import FPDF

# Create PDF
pdf = FPDF()

# Adding title and introductory page
pdf.add_page()
pdf.set_font("Arial", 'B', 16)
pdf.cell(200, 10, txt="Future Coders Bootcamp - Journey Overview",
         ln=True, align='C')
pdf.ln(10)

pdf.set_font("Arial", size=12)
pdf.multi_cell(0, 10, txt="""Welcome to the journey of the Future Coders Bootcamp. Over the past six weeks, we've seen our participants transform from beginners to budding developers. This document captures the essence of their journey from Day One till the last day, including the challenges, learnings, and achievements.""")
pdf.ln(10)

# Adding the journey week by week
weeks = [
    {
        "week": "Week 1: Introduction to HTML & CSS",
        "content": """In the first week, participants dived into the basics of web development by learning HTML and CSS. They explored how to structure web pages and style them to create visually appealing designs. The week ended with the first exercise where they built their own portfolio websites."""
    },
    {
        "week": "Week 2: Deep Dive into CSS and Bootstrap",
        "content": """In the second week, we delved deeper into CSS and introduced Bootstrap, a powerful CSS framework. Participants learned about responsive design and how to use Bootstrap to quickly style their web pages. The weekend project was creating a blog website using the new skills they acquired."""
    },
    {
        "week": "Week 3: JavaScript Basics",
        "content": """Week three marked the introduction to JavaScript, where participants learned about variables, data types, operators, and basic control structures like loops and conditionals. They started to bring interactivity to their web pages with these new tools."""
    },
    {
        "week": "Week 4: Advanced JavaScript Concepts",
        "content": """The fourth week took JavaScript to the next level with a focus on objects, arrays, and JSON. Participants were also introduced to the Document Object Model (DOM) and began manipulating web pages dynamically. This week’s project involved building a calculator and a to-do list."""
    },
    {
        "week": "Week 5: Fintech App Development",
        "content": """In the fifth week, participants applied their knowledge to create a mini fintech application. The project involved tracking daily expenses using JavaScript to manage data and update the UI dynamically. This was their most challenging project yet and required careful attention to detail and logic."""
    },
    {
        "week": "Week 6: Final Project - E-commerce Website",
        "content": """The final week was dedicated to the capstone project: building a fully functional e-commerce website. Participants utilized everything they had learned—from HTML and CSS to JavaScript and Bootstrap. This project was a culmination of their hard work and learning over the past six weeks."""
    },
]

for week in weeks:
    pdf.add_page()
    pdf.set_font("Arial", 'B', 14)
    pdf.cell(0, 10, txt=week["week"], ln=True)
    pdf.ln(5)

    pdf.set_font("Arial", size=12)
    pdf.multi_cell(0, 10, txt=week["content"])
    pdf.ln(5)

# Adding the conclusion
pdf.add_page()
pdf.set_font("Arial", 'B', 16)
pdf.cell(200, 10, txt="Conclusion", ln=True, align='C')
pdf.ln(10)

pdf.set_font("Arial", size=12)
pdf.multi_cell(0, 10, txt="""The Future Coders Bootcamp has been a transformative experience for all involved. Despite the challenges, our participants showed remarkable resilience and determination. We're proud of the nine participants who completed the program, and we look forward to seeing where their coding journey takes them.

Thank you to everyone who made this bootcamp possible, from the mentors and tutors to the participants themselves. We can’t wait to see you at the next edition of CodeConnect2!

Stay tuned and keep coding!""")
pdf.ln(10)

# Saving the PDF
pdf_file_path = "/mnt/data/Future_Coders_Bootcamp_Journey.pdf"
pdf.output(pdf_file_path)
