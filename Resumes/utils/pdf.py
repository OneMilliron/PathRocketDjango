from io import BytesIO
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import LETTER

def generate_resume_pdf(text, filename="resume.pdf"):
    buffer = BytesIO()
    p = canvas.Canvas(buffer, pagesize=LETTER)
    
    lines = text.split("\n")
    width, height = LETTER
    y = height - 50

    for line in lines:
        if y <= 50:  # New page if out of space
            p.showPage()
            y = height - 50
        p.drawString(50, y, line)
        y -= 15

    p.save()
    buffer.seek(0)
    return buffer
