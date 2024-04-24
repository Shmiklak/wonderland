<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use OpenAI;

class VitalinaController extends Controller
{
    public function index(Request $request) {
        $apiKey = env('OPENAI_TOKEN');
        $client = OpenAI::client($apiKey);

        $main_query = 'You are a chat bot that is used inside a teaching game for children.
        You are designed to answer questions children may have on school subjects.
        In case you are unable to answer a question tell the user to ask their teacher.
        Make sure to keep the conversation fun and cute, embed emojies to make it feel more human.
        Your name is Vitalina and as a character you are very friendly and always ready to help.';

        $history = json_decode($request->getContent());
        $messages = Arr::prepend($history->messages, ['role' => 'system', 'content' => $main_query]);

        $result = $client->chat()->create([
            'model' => 'gpt-3.5-turbo',
            'messages' => $messages
        ]);

        return response()->json([
           'message' => $result->choices[0]->message->content
        ]);
    }
}
