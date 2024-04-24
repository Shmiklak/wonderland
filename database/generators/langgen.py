import csv
import random

# Sample vocabulary for translation questions
vocabulary = {
    'apple': 'яблоко',
    'book': 'книга',
    'house': 'дом',
    'cat': 'кот',
    'dog': 'собака',
    'car': 'машина',
    'tree': 'дерево',
    'sun': 'солнце',
    'moon': 'луна',
    'water': 'вода',
    'friend': 'друг',
    'school': 'школа',
    'pen': 'ручка',
    'table': 'стол',
    'bird': 'птица',
    'flower': 'цветок',
    'sky': 'небо',
    'earth': 'земля',
    'star': 'звезда',
    'fish': 'рыба',
    'chair': 'стул',
    'door': 'дверь',
    'window': 'окно',
    'computer': 'компьютер',
    'phone': 'телефон',
    'pencil': 'карандаш',
    'notebook': 'тетрадь',
    'teacher': 'учитель',
    'student': 'ученик',
    'ball': 'мяч',
    'hat': 'шляпа',
    'music': 'музыка',
    'desk': 'парта',
    'picture': 'картина',
    'bed': 'кровать',
    'chair': 'кресло',
    'lamp': 'лампа',
    'clock': 'часы',
    'window': 'окно',
    'mirror': 'зеркало',
    'bag': 'сумка',
    'shoes': 'туфли',
    'shirt': 'рубашка',
    'pants': 'брюки',
    'socks': 'носки',
    'gloves': 'перчатки',
    'coat': 'пальто',
    'hat': 'шапка',
    'scarf': 'шарф',
    'glasses': 'очки',
    'belt': 'ремень',
    'watch': 'часы',
    # Add more vocabulary here
}

# Sample synonyms and antonyms for synonym/antonym questions
synonyms = {
    'happy': ['joyful', 'content', 'glad'],
    'sad': ['unhappy', 'miserable', 'depressed'],
    'big': ['large', 'huge', 'gigantic'],
    'small': ['tiny', 'little', 'miniature'],
    'hot': ['warm', 'scorching', 'burning'],
    'cold': ['cool', 'chilly', 'freezing'],
    'fast': ['quick', 'swift', 'rapid'],
    'slow': ['sluggish', 'leisurely', 'delayed'],
    'bright': ['shiny', 'radiant', 'luminous'],
    'dark': ['dim', 'gloomy', 'shadowy'],
    'strong': ['powerful', 'mighty', 'robust'],
    'weak': ['frail', 'feeble', 'fragile'],
    'happy': ['joyful', 'content', 'glad'],
    'sad': ['unhappy', 'miserable', 'depressed'],
    'big': ['large', 'huge', 'gigantic'],
    'small': ['tiny', 'little', 'miniature'],
    'hot': ['warm', 'scorching', 'burning'],
    'cold': ['cool', 'chilly', 'freezing'],
    'fast': ['quick', 'swift', 'rapid'],
    'slow': ['sluggish', 'leisurely', 'delayed'],
    'bright': ['shiny', 'radiant', 'luminous'],
    'dark': ['dim', 'gloomy', 'shadowy'],
    'strong': ['powerful', 'mighty', 'robust'],
    'weak': ['frail', 'feeble', 'fragile'],
    # Add more synonyms here
}

antonyms = {
    'happy': ['sad', 'unhappy', 'miserable', 'depressed'],
    'big': ['small', 'tiny', 'little', 'miniature'],
    'hot': ['cold', 'cool', 'chilly', 'freezing'],
    'fast': ['slow', 'sluggish', 'leisurely', 'delayed'],
    'bright': ['dark', 'dim', 'dull', 'gloomy'],
    'strong': ['weak', 'feeble', 'fragile', 'frail'],
    # Add more antonyms here
}

# Function to generate a translation question
def generate_translation_question():
    english_word, russian_translation = random.choice(list(vocabulary.items()))
    return f"What is the Russian translation of '{english_word}'?", russian_translation, *random.sample(vocabulary.values(), 2)

# Function to generate a synonym question
def generate_synonym_question():
    word = random.choice(sorted(synonyms.keys()))
    synonym = random.choice(synonyms[word])
    return f"What is a synonym for '{word}'?", synonym, *random.sample(synonyms[word], 2)

# Function to generate an antonym question
def generate_antonym_question():
    word = random.choice(sorted(synonyms.keys()))
    antonym = random.choice(antonyms[word])
    return f"What is an antonym for '{word}'?", antonym, *random.sample(antonyms[word], 2)

# Generate 100 questions
questions = []
while len(questions) < 100:
    question_type = random.choice(['translation', 'synonym', 'antonym'])
    if question_type == 'translation':
        question = generate_translation_question()
    elif question_type == 'synonym':
        question = generate_synonym_question()
    else:
        question = generate_antonym_question()
    if question not in questions:
        questions.append(question)

# Shuffle the questions
random.shuffle(questions)

# Write questions to CSV file
with open('english_questions.csv', 'w', newline='', encoding='utf-8') as csvfile:
    fieldnames = ['id', 'question', 'correct_answer', 'answer_variant_2', 'answer_variant_3']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    writer.writeheader()
    for i, (question, correct_answer, answer_variant_2, answer_variant_3) in enumerate(questions):
        writer.writerow({'id': i+1, 'question': question, 'correct_answer': correct_answer, 'answer_variant_2': answer_variant_2, 'answer_variant_3': answer_variant_3})

print("CSV file generated successfully.")
