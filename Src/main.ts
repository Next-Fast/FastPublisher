import * as core from '@actions/core'
import * as github from '@actions/github'

async function Run() 
{

}

Run().catch(error => core.setFailed(error.message))