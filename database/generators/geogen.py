import csv
import random

# Sample geography data for questions
countries = {
    'France': 'Paris',
    'United Kingdom': 'London',
    'Germany': 'Berlin',
    'Italy': 'Rome',
    'Spain': 'Madrid',
    'Russia': 'Moscow',
    'China': 'Beijing',
    'Japan': 'Tokyo',
    'United States': 'Washington D.C.',
    'Canada': 'Ottawa',
    'Brazil': 'Brasília',
    'Australia': 'Canberra',
    'India': 'New Delhi',
    'South Africa': 'Pretoria',
    'Egypt': 'Cairo',
    # Add more countries and capitals here
}

continents = {
    'Africa': ['Egypt', 'South Africa', 'Nigeria', 'Kenya', 'Morocco'],
    'Asia': ['China', 'India', 'Japan', 'South Korea', 'Indonesia'],
    'Europe': ['France', 'Germany', 'United Kingdom', 'Italy', 'Spain'],
    'North America': ['United States', 'Canada', 'Mexico', 'Cuba', 'Jamaica'],
    'South America': ['Brazil', 'Argentina', 'Colombia', 'Peru', 'Chile'],
    'Oceania': ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea', 'Samoa'],
    # Add more continents and countries here
}

landmarks = {
    'Eiffel Tower': 'France',
    'Big Ben': 'United Kingdom',
    'Statue of Liberty': 'United States',
    'Great Wall of China': 'China',
    'Taj Mahal': 'India',
    'Pyramids of Giza': 'Egypt',
    'Christ the Redeemer': 'Brazil',
    'Sydney Opera House': 'Australia',
    'Mount Everest': 'Nepal',
    'Machu Picchu': 'Peru',
    # Add more landmarks here
}

# Function to generate a capital question
def generate_capital_question():
    country = random.choice(list(countries.keys()))
    capital = countries[country]
    return f"What is the capital of {country}?", capital, *random.sample(list(countries.values()), 2)

# Function to generate a continent question
def generate_continent_question():
    continent = random.choice(list(continents.keys()))
    country = random.choice(continents[continent])
    other_continents = [c for c in continents.keys() if c != continent]
    return f"Which continent is {country} located in?", continent, *random.sample(other_continents, 2)

# Function to generate a landmark question
def generate_landmark_question():
    landmark = random.choice(list(landmarks.keys()))
    country = landmarks[landmark]
    return f"Which country is the {landmark} located in?", country, *random.sample(list(countries.values()), 2)

# Generate 100 geography questions
questions = []
while len(questions) < 50:
    question_type = random.choice(['capital', 'continent', 'landmark'])
    if question_type == 'capital':
        question = generate_capital_question()
    elif question_type == 'continent':
        question = generate_continent_question()
    else:
        question = generate_landmark_question()
    if question not in questions:
        questions.append(question)

# Shuffle the questions
random.shuffle(questions)

# Write questions to CSV file
with open('geography_questions.csv', 'w', newline='', encoding='utf-8') as csvfile:
    fieldnames = ['id', 'question', 'correct_answer', 'answer_variant_2', 'answer_variant_3', 'game_code']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()
    for i, (question, correct_answer, answer_variant_2, answer_variant_3) in enumerate(questions):
        writer.writerow({'id': i+801, 'question': question, 'correct_answer': correct_answer, 'answer_variant_2': answer_variant_2, 'answer_variant_3': answer_variant_3, 'game_code': 'geo'})

print("CSV file generated successfully.")