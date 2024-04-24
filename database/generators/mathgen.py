import csv
import random

# Function to generate a random addition question
def generate_addition_question():
    a = random.randint(1, 20)
    b = random.randint(1, 20)
    correct_answer = a + b
    return f"What is {a} + {b}?", str(correct_answer), str(random.randint(1, 40)), str(random.randint(1, 40))

# Function to generate a random subtraction question
def generate_subtraction_question():
    a = random.randint(1, 20)
    b = random.randint(1, a)
    correct_answer = a - b
    return f"What is {a} - {b}?", str(correct_answer), str(random.randint(1, 20)), str(random.randint(1, 20))

# Function to generate a random multiplication question
def generate_multiplication_question():
    a = random.randint(1, 10)
    b = random.randint(1, 10)
    correct_answer = a * b
    return f"What is {a} * {b}?", str(correct_answer), str(random.randint(1, 100)), str(random.randint(1, 100))

# Function to generate a random division question
def generate_division_question():
    a = random.randint(1, 10)
    b = random.randint(1, 10)
    product = a * b
    return f"What is {product} / {a}?", str(b), str(random.randint(1, 10)), str(random.randint(1, 10))

# Function to generate a random linear equation question
def generate_linear_equation_question():
    a = random.randint(1, 10)
    b = random.randint(1, 10)
    c = random.randint(1, 10)
    x = random.randint(1, 10)
    correct_answer = a * x + b + c
    return f"What is {a}x + {b} + {c} when x = {x}?", str(correct_answer), str(random.randint(1, 40)), str(random.randint(1, 40))

# Function to generate a random linear equation with x question
def generate_linear_equation_with_x_question():
    a = random.randint(1, 10)
    b = random.randint(1, 10)
    x = random.randint(1, 10)
    result = a * x + b
    return f"What is x if: {a}x + {b} = {result}?", str(x), str(random.randint(1, 10)), str(random.randint(1, 10))

# Generate 100 questions
questions = []
for _ in range(100):
    questions.append(generate_addition_question())
    questions.append(generate_subtraction_question())
    questions.append(generate_multiplication_question())
    questions.append(generate_division_question())
    questions.append(generate_linear_equation_question())
    questions.append(generate_linear_equation_with_x_question())

# Shuffle the questions
random.shuffle(questions)

# Write questions to CSV file
with open('math_questions.csv', 'w', newline='', encoding='utf-8') as csvfile:
    fieldnames = ['id', 'question', 'correct_answer', 'answer_variant_2', 'answer_variant_3']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()
    for i, (question, correct_answer, answer_variant_2, answer_variant_3) in enumerate(questions):
        writer.writerow({'id': i+1, 'question': question, 'correct_answer': correct_answer, 'answer_variant_2': answer_variant_2, 'answer_variant_3': answer_variant_3})

print("CSV file generated successfully.")
