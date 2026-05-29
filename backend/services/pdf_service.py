import pdfplumber
import pytesseract

from pdf2image import convert_from_path


# Tesseract installation path

pytesseract.pytesseract.tesseract_cmd = (
    r"C:\Program Files\Tesseract-OCR\tesseract.exe"
)

# Poppler path

POPPLER_PATH = (
    r"C:\poppler\poppler-26.02.0\Library\bin"
)


def extract_text_from_pdf(pdf_path):

    extracted_text = ""

    try:

        # First attempt:
        # Normal text extraction

        with pdfplumber.open(pdf_path) as pdf:

            for page in pdf.pages:

                text = page.extract_text()

                if text:

                    extracted_text += text + "\n"

        if extracted_text.strip():

            print(
                "✅ Text extracted using pdfplumber"
            )

            return extracted_text

        print(
            "⚠ No selectable text found."
        )

        print(
            "🔍 Switching to OCR..."
        )

        # OCR fallback

        images = convert_from_path(
            pdf_path,
            poppler_path=POPPLER_PATH
        )

        for image in images:

            page_text = (
                pytesseract.image_to_string(
                    image
                )
            )

            extracted_text += (
                page_text + "\n"
            )

        print(
            "✅ OCR extraction completed"
        )

        return extracted_text

    except Exception as e:

       import traceback

       traceback.print_exc()

       print(
           "❌ PDF Extraction Error:",
           str(e)
       ) 

       return ""